import { assert } from 'src/utils/assert';
import * as St from 'st';
import { ResultMeta } from './searchProvider';

const Me = imports.misc.extensionUtils.getCurrentExtension();

export type HistoryItem = {
    provider_id: string;
    id: string;
    terms: string[];
    context: Context;
};

const SEPARATOR = '::';
const STATE_KEY = 'recent-searches';
const MAX_HISTORY_SIZE = 100;

export class RecentSearchProvider {
    isRemoteProvider = false;
    searchInProgress = false;
    readonly id: string = 'ms-recent';
    history: HistoryItem[] = [];

    get title(): string {
        return 'Recent';
    }

    createFallbackIcon(icon_size: number): St.Icon | null {
        return null;
    }

    activateResult(id: string, terms: string[]): void {
        throw new Error(
            'Should never be called. Remap to original provider instead.'
        );
    }

    static splitId(id: string): { provider_id: string; id: string } {
        const v = id.split(SEPARATOR);
        assert(v.length == 2, `Invalid id: ${id}`);
        return {
            provider_id: v[0],
            id: v[1],
        };
    }

    loadHistoryFromExtensionState() {
        const historyState = Me.stateManager.getState(STATE_KEY);
        if (
            historyState !== undefined &&
            historyState.history !== undefined &&
            Array.isArray(historyState.history)
        ) {
            this.history = historyState.history;
        }
    }

    onResultActivated(provider_id: string, id: string, terms: string[]) {
        assert(
            provider_id != this.id,
            'Trying to add recent item to history again. Remap it to the original provider first.'
        );
        if (provider_id === 'org.gnome.Calculator.desktop') {
            // Do not include calculator results in the history.
            // It rarely makes sense to suggest recent calculations again
            return;
        }
        this.history.push({
            id,
            provider_id,
            terms,
            context: this.getContext(),
        });
        if (this.history.length > MAX_HISTORY_SIZE) {
            this.history.shift();
        }
        Me.stateManager.setState(STATE_KEY, {
            history: this.history,
        });
    }

    private getContext(): Context {
        return {
            timestamp: new Date().getTime(),
            visible_apps: [
                ...new Set(
                    Me.msWindowManager.msWindowList
                        .filter(
                            (x) =>
                                x.lifecycleState.type === 'window' &&
                                x.msWorkspace.isDisplayed()
                        )
                        .map((x) => x.state.appId)
                ).values(),
            ],
            open_apps: [
                ...new Set(
                    Me.msWindowManager.msWindowList
                        .filter((x) => x.lifecycleState.type === 'window')
                        .map((x) => x.state.appId)
                ).values(),
            ],
            workspace_index:
                Me.msWorkspaceManager.workspaceManager.get_active_workspace_index(),
        };
    }

    search(
        terms: string[],
        provider_results: Map<string, ResultMeta[]>
    ): ResultMeta[] {
        terms = terms.map((x) => x.toLocaleLowerCase());

        // Check which results have been found by providers
        const seen = new Map<string, ResultMeta>();
        for (const [provider_id, metas] of provider_results) {
            for (const meta of metas) {
                seen.set(provider_id + SEPARATOR + meta.id, meta);
            }
        }

        // Filter history items by if the current search includes them as a result
        const filteredHistory: HistoryItem[] = [];
        for (const item of this.history) {
            const key = item.provider_id + SEPARATOR + item.id;
            const meta = seen.get(key);
            if (meta !== undefined) {
                filteredHistory.push(item);
            }
        }

        // Create a decision tree based on the filtered history items
        const forest = new DecisionTree(filteredHistory);
        // Get the best result from the decision tree, based on the current context
        const best = forest.eval(this.getContext());

        if (best.length > 0) {
            const [dominantItem, count] = getDominantItem(best);
            // If our current context mostly matches only one type of result, then return that result.

            const PROBABILITY_THRESHOLD = 0.9;
            // Bias the calculation when best.length is small
            const CONSTANT_OFFSET = 1;
            if (
                (count + CONSTANT_OFFSET) / best.length >
                PROBABILITY_THRESHOLD
            ) {
                const key =
                    dominantItem.provider_id + SEPARATOR + dominantItem.id;
                const bestMeta = seen.get(key)!;
                return [
                    {
                        id: key,
                        name: bestMeta.name,
                        description: bestMeta.description,
                        createIcon: bestMeta.createIcon,
                        clipboardText: bestMeta.clipboardText,
                    },
                ];
            } else {
                return [];
            }
        } else {
            return [];
        }
    }
}

function getDominantItem(items: HistoryItem[]): [HistoryItem, number] {
    assert(items.length > 0, 'Cannot get dominant item from empty list');
    const counts = new Map<string, number>();
    for (const item of items) {
        const key = item.provider_id + SEPARATOR + item.id;
        const count = counts.get(key) || 0;
        counts.set(key, count + 1);
    }
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const key = sorted[0][0];
    const [provider_id, id] = key.split(SEPARATOR);
    const item = items.find((x) => x.provider_id == provider_id && x.id == id)!;
    return [item, sorted[0][1]];
}

type DecisionTreeNode =
    | {
          type: 'split';
          split: SplitCategory;
          falsy: DecisionTreeNode;
          truthy: DecisionTreeNode;
      }
    | {
          type: 'leaf';
          items: HistoryItem[];
      };

/** Different categories of things that may influence what application a user wants to open, or action to perform.
 *
 * For example, it may be reasonable that the user wants to use the 'Shutdown' action in the evening, but wants to open 'Spotify' in the morning.
 * So for a search with the term 's' we may want to recommend a different item depending on the time of day.
 */
type SplitCategory =
    | {
          id: 'isAppOpen';
          app_id: string;
      }
    | {
          id: 'isTimeOfDay';
          time_of_day: 'morning' | 'afternoon' | 'evening' | 'night';
      }
    | {
          id: 'isDayOfWeek';
          day_of_week: number;
      }
    | {
          id: 'isAppVisible';
          app_id: string;
      }
    | {
          id: 'isWorkspaceIndex';
          workspace_index: number;
      };

type Context = {
    timestamp: number;
    /** Apps which are visible on any monitor, on the current workspace */
    visible_apps: string[];
    /** Apps which are open, but may or may not be visible */
    open_apps: string[];
    /** Currently active workspace index */
    workspace_index: number;
};

/** See https://en.wikipedia.org/wiki/Decision_tree_learning */
class DecisionTree {
    root: DecisionTreeNode;

    constructor(metas: HistoryItem[]) {
        this.root = DecisionTree.buildTree(metas);
    }

    eval(context: Context): HistoryItem[] {
        let node = this.root;
        while (node.type == 'split') {
            if (DecisionTree.evalCategory(node.split, context)) {
                node = node.truthy;
            } else {
                node = node.falsy;
            }
        }
        return node.items;
    }

    private static buildTree(items: HistoryItem[]): DecisionTreeNode {
        if (DecisionTree.entropy(items) == 0.0) {
            return {
                type: 'leaf',
                items,
            };
        }
        const split = DecisionTree.bestSplit(items);
        if (split === null) {
            return {
                type: 'leaf',
                items,
            };
        }

        return {
            type: 'split',
            split: split.split,
            falsy: DecisionTree.buildTree(split.falsy),
            truthy: DecisionTree.buildTree(split.truthy),
        };
    }

    private static evalCategory(
        category: SplitCategory,
        context: Context
    ): boolean {
        switch (category.id) {
            case 'isAppOpen':
                return context.open_apps.includes(category.app_id);
            case 'isTimeOfDay':
                return getTimeOfDay(context.timestamp) == category.time_of_day;
            case 'isDayOfWeek':
                return getDayOfWeek(context.timestamp) == category.day_of_week;
            case 'isAppVisible':
                return context.visible_apps.includes(category.app_id);
            case 'isWorkspaceIndex':
                return context.workspace_index == category.workspace_index;
            default:
                assert(false, 'Invalid category');
        }
    }

    private static getCategories(history: HistoryItem[]): SplitCategory[] {
        const categories: SplitCategory[] = [];
        const visible_apps = new Set<string>();
        const open_apps = new Set<string>();
        const workspace_indices = new Set<number>();
        const days_of_week = new Set<number>();
        const times_of_day = new Set<
            'morning' | 'afternoon' | 'evening' | 'night'
        >();
        for (const item of history) {
            for (const app_id of item.context.visible_apps) {
                visible_apps.add(app_id);
            }
            for (const app_id of item.context.open_apps) {
                open_apps.add(app_id);
            }
            workspace_indices.add(item.context.workspace_index);
            days_of_week.add(getDayOfWeek(item.context.timestamp));
            times_of_day.add(getTimeOfDay(item.context.timestamp));
        }

        for (const app_id of visible_apps) {
            categories.push({
                id: 'isAppVisible',
                app_id,
            });
        }
        for (const app_id of open_apps) {
            categories.push({
                id: 'isAppOpen',
                app_id,
            });
        }
        for (const day_of_week of days_of_week) {
            categories.push({
                id: 'isDayOfWeek',
                day_of_week,
            });
        }
        for (const time_of_day of times_of_day) {
            categories.push({
                id: 'isTimeOfDay',
                time_of_day,
            });
        }
        for (const workspace_index of workspace_indices) {
            categories.push({
                id: 'isWorkspaceIndex',
                workspace_index,
            });
        }
        return categories;
    }

    private static bestSplit(history: HistoryItem[]): {
        split: SplitCategory;
        falsy: HistoryItem[];
        truthy: HistoryItem[];
    } | null {
        assert(history.length > 0, "Can't split empty history");
        let bestCategory: SplitCategory | undefined = undefined;
        let bestScore = -1 / 0;
        let bestSplit: [HistoryItem[], HistoryItem[]] = [[], []];

        const categories = DecisionTree.getCategories(history);
        for (const category of categories) {
            const [falsy, truthy] = DecisionTree.split(history, category);
            const score = DecisionTree.score(falsy, truthy);
            if (score > bestScore) {
                bestScore = score;
                bestCategory = category;
                bestSplit = [falsy, truthy];
            }
        }

        if (bestSplit[0].length == 0 || bestSplit[1].length == 0) return null;
        return {
            split: bestCategory!,
            falsy: bestSplit[0],
            truthy: bestSplit[1],
        };
    }

    private static entropy(history: HistoryItem[]): number {
        const counts = new Map<string, number>();
        for (const item of history) {
            const key = item.provider_id + SEPARATOR + item.id;
            const prev = counts.get(key);
            if (prev === undefined) {
                counts.set(key, 1);
            } else {
                counts.set(key, prev + 1);
            }
        }
        let result = 0;
        for (const v of counts.values()) {
            const p = v / history.length;
            result -= p * Math.log2(p);
        }
        return result;
    }

    /** Score for splitting the node in this way.
     * The value sorts the same way as the information gain, but it may be different (up to a constant factor and a constant bias).
     *
     * Higher values are better.
     *
     * See https://en.wikipedia.org/wiki/Information_gain_(decision_tree)
     */
    private static score(falsy: HistoryItem[], truthy: HistoryItem[]): number {
        return -(
            DecisionTree.entropy(falsy) * falsy.length +
            DecisionTree.entropy(truthy) * truthy.length
        );
    }

    /** Split a set of items using a given category */
    private static split(
        history: HistoryItem[],
        category: SplitCategory
    ): [HistoryItem[], HistoryItem[]] {
        const falsy: HistoryItem[] = [];
        const truthy: HistoryItem[] = [];
        for (const item of history) {
            if (this.evalCategory(category, item.context)) {
                truthy.push(item);
            } else {
                falsy.push(item);
            }
        }
        return [falsy, truthy];
    }

    toString(): string {
        return JSON.stringify(this.root, null, 2);
    }
}

function getTimeOfDay(
    timestamp: number
): 'morning' | 'afternoon' | 'evening' | 'night' {
    const hour = new Date(timestamp).getHours();
    if (hour < 6) {
        return 'night';
    }
    if (hour < 12) {
        return 'morning';
    }
    if (hour < 18) {
        return 'afternoon';
    }
    return 'evening';
}

function getDayOfWeek(timestamp: number): number {
    return new Date(timestamp).getDay();
}

function testRandomForest() {
    const history: HistoryItem[] = [
        {
            terms: [],
            provider_id: 'pa',
            id: 'a',
            context: {
                visible_apps: ['a', 'b'],
                open_apps: ['a', 'b'],
                workspace_index: 0,
                timestamp: 0,
            },
        },
        {
            terms: [],
            provider_id: 'pa',
            id: 'b',
            context: {
                visible_apps: ['a'],
                open_apps: ['a'],
                workspace_index: 0,
                timestamp: 0,
            },
        },
    ];

    const forest = new DecisionTree(history);
    assert(
        forest.eval({
            visible_apps: ['a'],
            open_apps: ['a'],
            workspace_index: 0,
            timestamp: 0,
        })[0].id === 'b',
        ''
    );
    assert(
        forest.eval({
            visible_apps: ['a', 'c'],
            open_apps: ['a', 'q'],
            workspace_index: 1,
            timestamp: 42132,
        })[0].id === 'b',
        ''
    );
}

testRandomForest();

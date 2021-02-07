import { MsWorkspace } from './msWorkspace';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported MsWorkspaceCategory, MainCategories */

//Ordered by specificity in case of equality the most specific category will be chosen
export const MainCategories = [
    'Game',
    'Development',
    'Video',
    'Audio',
    'AudioVideo',
    'Graphics',
    'Office',
    'Science',
    'Education',
    'FileManager',
    'InstantMessaging',
    'Network',
    'Settings',
    'System',
    'Utility',
];

const meaningfulCategories = ['IDE', 'WebBrowser', 'Player'];

export class MsWorkspaceCategory {
    msWorkspace: MsWorkspace;
    forcedCategory: string | null | undefined;
    category: string | null;

    constructor(
        msWorkspace: MsWorkspace,
        forcedCategory: string | null | undefined
    ) {
        this.msWorkspace = msWorkspace;
        this.forcedCategory = forcedCategory;
        this.category = this.determineCategory();
    }

    forceCategory(category: string | undefined) {
        this.forcedCategory = category;
        this.refreshCategory();
        Me.stateManager.stateChanged();
    }

    refreshCategory() {
        this.category = this.determineCategory();
    }

    private determineCategory(): string | null {
        if (this.forcedCategory) {
            return this.forcedCategory;
        }
        const appList = this.msWorkspace.msWindowList.map((msWindow) => {
            return msWindow.app;
        });
        if (!appList.length) return null;
        const categoryScoreMap = new Map();

        appList.forEach((app) => {
            if (app.is_window_backed()) return;
            const appMainCategories: string[] = [];
            let multiplier = 1;
            const categoriesString = app.get_app_info().get_categories();
            const categories = categoriesString
                ? categoriesString.split(';')
                : [];
            categories.forEach((category: string) => {
                if (MainCategories.includes(category)) {
                    appMainCategories.push(category);
                }
                if (meaningfulCategories.includes(category)) {
                    multiplier += 1;
                }
            });

            appMainCategories.forEach((category) => {
                if (categoryScoreMap.has(category)) {
                    categoryScoreMap.set(
                        category,
                        categoryScoreMap.get(category) + 1 * Number(multiplier)
                    );
                } else {
                    categoryScoreMap.set(category, 1 * Number(multiplier));
                }
            });
        });
        let mostRatedCategoryEntry: [string, number] | null = null;
        for (const entry of categoryScoreMap.entries()) {
            if (!mostRatedCategoryEntry || entry[1] > mostRatedCategoryEntry[1])
                mostRatedCategoryEntry = entry;

            if (
                entry[1] === mostRatedCategoryEntry[1] &&
                MainCategories.indexOf(entry[0]) <
                    MainCategories.indexOf(mostRatedCategoryEntry[0])
            ) {
                mostRatedCategoryEntry = entry;
            }
        }
        if (!mostRatedCategoryEntry) return null;
        return mostRatedCategoryEntry[0];
    }
}

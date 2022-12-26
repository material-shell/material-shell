import * as Gio from 'gio';
import * as Shell from 'shell';
import * as St from 'st';
import { ResultMeta } from './searchProvider';
export const ParentalControlsManager = imports.misc.parentalControlsManager;
export const SystemActions = imports.misc.systemActions;
const Me = imports.misc.extensionUtils.getCurrentExtension();

export class AppSearchProvider {
    private _appSys: Shell.AppSystem;
    isRemoteProvider = false;
    readonly id: string = 'applications';
    private canLaunchSearch: boolean;
    searchInProgress = false;
    private _systemActions;
    private _parentalControlsManager;

    get title(): string {
        return _('Applications');
    }

    constructor() {
        this._appSys = Shell.AppSystem.get_default();
        this.canLaunchSearch = false;

        this._systemActions = new SystemActions.getDefault();
        this._parentalControlsManager = ParentalControlsManager.getDefault();
    }

    createFallbackIcon(icon_size: number): St.Icon | null {
        return null;
    }

    activateResult(id: string, terms: string[]): void {
        const app = Shell.AppSystem.get_default().lookup_app(id);
        if (app) {
            Me.msWindowManager.openApp(
                app,
                Me.msWorkspaceManager.getActiveMsWorkspace()
            );
        } else {
            SystemActions.getDefault().activateAction(id);
        }
    }

    getResultMetas(apps: string[]) {
        const { scaleFactor } = St.ThemeContext.get_for_stage(global.stage);
        const metas: ResultMeta[] = [];
        for (const id of apps) {
            if (id.endsWith('.desktop')) {
                const app = this._appSys.lookup_app(id);

                metas.push({
                    id: app.get_id(),
                    name: app.get_name(),
                    createIcon: (size) =>
                        app.create_icon_texture(size) as St.Icon,
                });
            } else {
                const name = this._systemActions.getName(id);
                const iconName = this._systemActions.getIconName(id);

                const createIcon = (size: number) =>
                    new St.Icon({
                        icon_name: iconName,
                        width: size * scaleFactor,
                        height: size * scaleFactor,
                        style_class: 'system-action-icon',
                    });

                metas.push({ id, name, createIcon });
            }
        }

        return Promise.resolve(metas);
    }

    filterResults(results: string[], maxNumber: number) {
        return results.slice(0, maxNumber);
    }

    getInitialResultSet(
        terms: string[],
        cancellable: Gio.Cancellable
    ): Promise<string[]> {
        // Defer until the parental controls manager is initialised, so the
        // results can be filtered correctly.
        if (!this._parentalControlsManager.initialized) {
            return new Promise((resolve) => {
                const initializedId = this._parentalControlsManager.connect(
                    'app-filter-changed',
                    async () => {
                        if (this._parentalControlsManager.initialized) {
                            this._parentalControlsManager.disconnect(
                                initializedId
                            );
                            resolve(
                                await this.getInitialResultSet(
                                    terms,
                                    cancellable
                                )
                            );
                        }
                    }
                );
            });
        }

        const query = terms.join(' ');
        const groups = Shell.AppSystem.search(query);
        const usage = Shell.AppUsage.get_default();
        let results: string[] = [];

        groups.forEach((group) => {
            group = group.filter((appID) => {
                const app = this._appSys.lookup_app(appID);
                return (
                    app &&
                    this._parentalControlsManager.shouldShowApp(app.app_info)
                );
            });
            results = results.concat(group.sort((a, b) => usage.compare(a, b)));
        });

        results = results.concat(this._systemActions.getMatchingActions(terms));
        return new Promise((resolve) => resolve(results));
    }

    getSubsearchResultSet(
        previousResults: string[],
        terms: string[],
        cancellable: Gio.Cancellable
    ) {
        return this.getInitialResultSet(terms, cancellable);
    }
}

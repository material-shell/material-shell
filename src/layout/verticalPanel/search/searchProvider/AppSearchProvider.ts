import * as Gio from 'gio';
import * as Shell from 'shell';
import * as St from 'st';
import { ResultMeta } from './searchProvider';
export const ParentalControlsManager = imports.misc.parentalControlsManager;
export const SystemActions = imports.misc.systemActions;

export class AppSearchProvider {
    _appSys: Shell.AppSystem;
    isRemoteProvider = false;
    id: string;
    canLaunchSearch: boolean;
    searchInProgress?: boolean;
    defaultEnabled?: boolean;
    _systemActions;
    _parentalControlsManager;
    constructor() {
        this._appSys = Shell.AppSystem.get_default();
        this.id = 'applications';
        this.canLaunchSearch = false;

        this._systemActions = new SystemActions.getDefault();
        this._parentalControlsManager = ParentalControlsManager.getDefault();
    }
    activateResult(id: string, terms: string[]): void {
        throw new Error('Method not implemented.');
    }

    getResultMetas(apps: string[]) {
        const { scaleFactor } = St.ThemeContext.get_for_stage(global.stage);
        let metas: ResultMeta[] = [];
        for (let id of apps) {
            if (id.endsWith('.desktop')) {
                let app = this._appSys.lookup_app(id);

                metas.push({
                    id: app.get_id(),
                    name: app.get_name(),
                    createIcon: (size) =>
                        app.create_icon_texture(size) as St.Icon,
                });
            } else {
                let name = this._systemActions.getName(id);
                let iconName = this._systemActions.getIconName(id);

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
                let initializedId = this._parentalControlsManager.connect(
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

        let query = terms.join(' ');
        let groups = Shell.AppSystem.search(query);
        let usage = Shell.AppUsage.get_default();
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

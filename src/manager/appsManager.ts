/** Gnome libs imports */
import * as Shell from 'shell';

export class AppsManager {
    static getApps() {
    try{
        const usage = Shell.AppUsage.get_default();
        const appSystem = Shell.AppSystem.get_default();
        const appsInstalled = appSystem.get_installed().filter((appInfo) => {
            try {
                const _ = appInfo.get_id(); // catch invalid file encodings
            } catch (e) {
                return false;
            }
            return appInfo.should_show();
        });

        return appsInstalled
            .sort((a, b) => {
                return usage.compare(a.get_id(), b.get_id());
            })
            .map((appInfo) => {
                return appSystem.lookup_app(appInfo.get_id());
            });} finally {}
    }
}

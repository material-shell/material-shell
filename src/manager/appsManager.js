/** Gnome libs imports */
const { Shell } = imports.gi;

/* exported AppsManager */
var AppsManager = class AppsManager {
    constructor() {}

    static getApps() {
        let usage = Shell.AppUsage.get_default();
        let appSystem = Shell.AppSystem.get_default();
        let appsInstalled = appSystem.get_installed().filter((appInfo) => {
            try {
                let _ = appInfo.get_id(); // catch invalid file encodings
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
            });
    }
};

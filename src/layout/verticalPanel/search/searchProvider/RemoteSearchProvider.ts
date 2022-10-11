import * as Gio from 'gio';
import * as GLib from 'glib';
import * as Shell from 'shell';
import { assertNotNull } from 'src/utils/assert';
import { logAsyncException } from 'src/utils/log';
import {
    compareVersions,
    gnomeVersionNumber,
    parseVersion,
} from 'src/utils/shellVersionMatch';
import * as St from 'st';
import { RawMeta, ResultMeta, UnpackedMeta } from './searchProvider';
export const Me = imports.misc.extensionUtils.getCurrentExtension();

const FileUtils = imports.misc.fileUtils;
export const GdkPixbuf = imports.gi.GdkPixbuf;
export const ParentalControlsManager = imports.misc.parentalControlsManager;
const KEY_FILE_GROUP = 'Shell Search Provider';

const beforeGnome43 =
    compareVersions(gnomeVersionNumber, parseVersion('43.0')) < 0;
const SearchProviderIface = `
<node>
<interface name="org.gnome.Shell.SearchProvider">
<method name="GetInitialResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetSubsearchResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetResultMetas">
    <arg type="as" direction="in" />
    <arg type="aa{sv}" direction="out" />
</method>
<method name="ActivateResult">
    <arg type="s" direction="in" />
</method>
</interface>
</node>`;

const SearchProvider2Iface = `
<node>
<interface name="org.gnome.Shell.SearchProvider2">
<method name="GetInitialResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetSubsearchResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetResultMetas">
    <arg type="as" direction="in" />
    <arg type="aa{sv}" direction="out" />
</method>
<method name="ActivateResult">
    <arg type="s" direction="in" />
    <arg type="as" direction="in" />
    <arg type="u" direction="in" />
</method>
<method name="LaunchSearch">
    <arg type="as" direction="in" />
    <arg type="u" direction="in" />
</method>
</interface>
</node>`;
export var SearchProviderProxyInfo =
    Gio.DBusInterfaceInfo.new_for_xml(SearchProviderIface);
export var SearchProvider2ProxyInfo =
    Gio.DBusInterfaceInfo.new_for_xml(SearchProvider2Iface);

export function loadRemoteSearchProviders(
    searchSettings: Gio.Settings
): (RemoteSearchProvider | RemoteSearchProvider2)[] {
    const objectPaths: {
        [objectPath: string]: RemoteSearchProvider | RemoteSearchProvider2;
    } = {};
    let loadedProviders: (RemoteSearchProvider | RemoteSearchProvider2)[] = [];

    function loadRemoteSearchProvider(file: Gio.File) {
        const keyfile = new GLib.KeyFile();
        const path = file.get_path();

        try {
            keyfile.load_from_file(path as string, 0);
        } catch (e) {
            return;
        }

        if (!keyfile.has_group(KEY_FILE_GROUP)) return;

        let remoteProvider;
        try {
            const group = KEY_FILE_GROUP;
            const busName = keyfile.get_string(group, 'BusName');
            const objectPath = keyfile.get_string(group, 'ObjectPath');

            if (objectPaths[objectPath]) return;

            let appInfo = null;
            try {
                const desktopId = keyfile.get_string(group, 'DesktopId');
                appInfo = Gio.DesktopAppInfo.new(desktopId);
                if (!appInfo.should_show()) return;
            } catch (e) {
                log(`Ignoring search provider ${path}: missing DesktopId`);
                return;
            }

            let autoStart = true;
            try {
                autoStart = keyfile.get_boolean(group, 'AutoStart');
            } catch (e) {
                // ignore error
            }

            let version = '1';
            try {
                version = keyfile.get_string(group, 'Version');
            } catch (e) {
                // ignore error
            }

            if (parseInt(version) >= 2)
                remoteProvider = new RemoteSearchProvider2(
                    appInfo,
                    busName,
                    objectPath,
                    autoStart
                );
            else
                remoteProvider = new RemoteSearchProvider(
                    appInfo,
                    busName,
                    objectPath,
                    autoStart
                );

            remoteProvider.defaultEnabled = true;
            try {
                remoteProvider.defaultEnabled = !keyfile.get_boolean(
                    group,
                    'DefaultDisabled'
                );
            } catch (e) {
                // ignore error
            }

            objectPaths[objectPath] = remoteProvider;
            loadedProviders.push(remoteProvider);
        } catch (e) {
            log(`Failed to add search provider ${path}: ${e}`);
        }
    }

    if (searchSettings.get_boolean('disable-external')) return [];

    FileUtils.collectFromDatadirs(
        'search-providers',
        false,
        loadRemoteSearchProvider
    );

    const sortOrder = searchSettings.get_strv('sort-order');

    // Special case gnome-control-center to be always active and always first
    sortOrder.unshift('org.gnome.Settings.desktop');

    const disabled = searchSettings.get_strv('disabled');
    const enabled = searchSettings.get_strv('enabled');

    loadedProviders = loadedProviders.filter((provider) => {
        const appId = provider.appInfo.get_id();

        if (provider.defaultEnabled) return !disabled.includes(appId);
        else return enabled.includes(appId);
    });

    loadedProviders.sort((providerA, providerB) => {
        let idxA, idxB;
        let appIdA, appIdB;

        appIdA = providerA.appInfo.get_id();
        appIdB = providerB.appInfo.get_id();

        idxA = sortOrder.indexOf(appIdA);
        idxB = sortOrder.indexOf(appIdB);

        // if no provider is found in the order, use alphabetical order
        if (idxA == -1 && idxB == -1) {
            const nameA = providerA.appInfo.get_name();
            const nameB = providerB.appInfo.get_name();

            return GLib.utf8_collate(nameA, nameB);
        }

        // if providerA isn't found, it's sorted after providerB
        if (idxA == -1) return 1;

        // if providerB isn't found, it's sorted after providerA
        if (idxB == -1) return -1;

        // finally, if both providers are found, return their order in the list
        return idxA - idxB;
    });

    return loadedProviders;
}

export class RemoteSearchProvider {
    appInfo: Gio.DesktopAppInfo;
    proxy: Gio.DBusProxy;
    defaultEnabled?: boolean;
    isRemoteProvider = true;
    id: string;
    canLaunchSearch = false;
    searchInProgress?: boolean | undefined;
    constructor(
        appInfo: Gio.DesktopAppInfo,
        dbusName: string,
        dbusPath: string,
        autoStart: boolean,
        proxyInfo?: Gio.DBusInterfaceInfo
    ) {
        if (!proxyInfo) proxyInfo = SearchProviderProxyInfo;

        let gFlags = Gio.DBusProxyFlags.DO_NOT_LOAD_PROPERTIES;
        if (autoStart)
            gFlags |= Gio.DBusProxyFlags.DO_NOT_AUTO_START_AT_CONSTRUCTION;
        else gFlags |= Gio.DBusProxyFlags.DO_NOT_AUTO_START;

        this.proxy = new Gio.DBusProxy({
            g_bus_type: Gio.BusType.SESSION,
            g_name: dbusName,
            g_object_path: dbusPath,
            g_interface_info: proxyInfo,
            g_interface_name: proxyInfo.name,
            gFlags,
        });
        this.proxy.init_async(GLib.PRIORITY_DEFAULT, null);

        this.appInfo = appInfo;
        this.id = appInfo.get_id();
    }
    createIcon(size: number, meta: UnpackedMeta): St.Icon | null {
        let gicon = null;
        let icon = null;

        if (meta['icon']) {
            gicon = Gio.icon_deserialize(meta['icon']);
        } else if (meta['gicon']) {
            gicon = Gio.icon_new_for_string(meta['gicon']);
        } else if (meta['icon-data']) {
            const [
                width,
                height,
                rowStride,
                hasAlpha,
                bitsPerSample,
                nChannels_,
                data,
            ] = meta['icon-data'];
            gicon = Shell.util_create_pixbuf_from_data(
                data,
                GdkPixbuf.Colorspace.RGB,
                hasAlpha,
                bitsPerSample,
                width,
                height,
                rowStride
            );
        }

        if (gicon) icon = new St.Icon({ gicon, icon_size: size });
        return icon;
    }

    filterResults(results: string[], maxNumber: number) {
        if (results.length <= maxNumber) return results;

        const regularResults = results.filter((r) => !r.startsWith('special:'));
        const specialResults = results.filter((r) => r.startsWith('special:'));

        return regularResults
            .slice(0, maxNumber)
            .concat(specialResults.slice(0, maxNumber));
    }

    async getInitialResultSet(terms: string[], cancellable: Gio.Cancellable) {
        try {
            const [results] = await (beforeGnome43
                ? new Promise<any[]>((resolve, reject) => {
                      this.proxy.GetInitialResultSetRemote(
                          terms,
                          (results: any[], error: string) => {
                              if (error) reject(error);
                              else resolve(results);
                          },
                          cancellable
                      );
                  })
                : this.proxy.GetInitialResultSetAsync(terms, cancellable));
            return results;
        } catch (error: any) {
            if (!error.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.CANCELLED))
                log(
                    `Received error from D-Bus search provider ${this.id}: ${error}`
                );
            return [];
        }
    }

    async getSubsearchResultSet(
        previousResults: string[],
        newTerms: string[],
        cancellable: Gio.Cancellable
    ) {
        try {
            const [results] = await (beforeGnome43
                ? new Promise<any[]>((resolve, reject) => {
                      this.proxy.GetSubsearchResultSetRemote(
                          previousResults,
                          newTerms,
                          (results: any[], error: string) => {
                              if (error) reject(error);
                              else resolve(results);
                          },
                          cancellable
                      );
                  })
                : this.proxy.GetSubsearchResultSetAsync(
                      previousResults,
                      newTerms,
                      cancellable
                  ));
            return results;
        } catch (error: any) {
            if (!error.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.CANCELLED))
                log(
                    `Received error from D-Bus search provider ${this.id}: ${error}`
                );
            return [];
        }
    }

    async getResultMetas(ids: string[], cancellable: Gio.Cancellable) {
        let metas: RawMeta[];
        try {
            [metas] = await (beforeGnome43
                ? new Promise<any[]>((resolve, reject) => {
                      this.proxy.GetResultMetasRemote(
                          ids,
                          (results: any[], error: string) => {
                              if (error) reject(error);
                              else resolve(results);
                          },
                          cancellable
                      );
                  })
                : this.proxy.GetResultMetasAsync(ids, cancellable));
        } catch (error: any) {
            if (!error.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.CANCELLED))
                log(
                    `Received error from D-Bus search provider ${this.id} during GetResultMetas: ${error}`
                );
            return [];
        }

        const resultMetas: ResultMeta[] = [];
        for (let i = 0; i < metas.length; i++) {
            const rawMeta = metas[i];
            const unpackedMeta: UnpackedMeta = {};
            for (const prop in rawMeta) {
                // we can use the serialized icon variant directly
                if (prop !== 'icon')
                    unpackedMeta[prop] = rawMeta[prop].deepUnpack();
                else unpackedMeta[prop] = rawMeta[prop];
            }

            resultMetas.push({
                id: assertNotNull(unpackedMeta['id']),
                name: assertNotNull(unpackedMeta['name']),
                description: unpackedMeta['description'],
                createIcon: (size: number) =>
                    this.createIcon(size, unpackedMeta),
                clipboardText: unpackedMeta['clipboardText'],
            });
        }
        return resultMetas;
    }

    activateResult(id: string, terms: string[]) {
        if (beforeGnome43) {
            this.proxy.ActivateResultRemote(
                id,
                terms,
                global.get_current_time()
            );
        } else {
            this.proxy.ActivateResultAsync(id).catch(logAsyncException);
        }
    }

    launchSearch(_terms: string[]) {
        // the provider is not compatible with the new version of the interface, launch
        // the app itself but warn so we can catch the error in logs
        log(
            `Search provider ${this.appInfo.get_id()} does not implement LaunchSearch`
        );
        this.appInfo.launch([], global.create_app_launch_context(0, -1));
    }
}

export class RemoteSearchProvider2 extends RemoteSearchProvider {
    constructor(
        appInfo: Gio.DesktopAppInfo,
        dbusName: string,
        dbusPath: string,
        autoStart: boolean
    ) {
        super(appInfo, dbusName, dbusPath, autoStart, SearchProvider2ProxyInfo);

        this.canLaunchSearch = true;
    }

    activateResult(id: string, terms: string[]) {
        this.proxy
            .ActivateResultAsync(id, terms, global.get_current_time())
            .catch(logAsyncException);
    }

    launchSearch(terms: string[]) {
        this.proxy
            .LaunchSearchAsync(terms, global.get_current_time())
            .catch(logAsyncException);
    }
}

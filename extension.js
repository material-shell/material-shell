const Me = imports.misc.extensionUtils.getCurrentExtension();
const LeftPanelModule =
    Me.imports.module.leftPanel.leftPanelModule.LeftPanelModule;
const WorkspaceEnhancerModule =
    Me.imports.module.workspaceEnhancer.workspaceEnhancerModule
        .WorkspaceEnhancerModule;
const NoTitleBarModule = Me.imports.module.noTitleBarModule.NoTitleBarModule;
const { GMenu, Gio } = imports.gi;

//const AggregateMenu = imports.ui.panel.AggregateMenu;

let modules;

// eslint-disable-next-line no-unused-vars
function init() {
    modules = [
        new LeftPanelModule(),
        new WorkspaceEnhancerModule(),
        new NoTitleBarModule()
    ];
}

// eslint-disable-next-line no-unused-vars
function enable() {
    this._tree = new GMenu.Tree({ menu_basename: 'applications.menu' });
    this._tree.load_sync();
    let root = this._tree.get_root_directory();
    let iter = root.iter();
    let nextType;
    while ((nextType = iter.next()) != GMenu.TreeItemType.INVALID) {
        if (nextType != GMenu.TreeItemType.DIRECTORY) continue;

        let dir = iter.get_directory();
        if (dir.get_is_nodisplay()) continue;

        let categoryId = dir.get_menu_id();
        log(dir.get_name());
    }

    /* let _folderSettings = new Gio.Settings({ schema_id: 'org.gnome.desktop.app-folders' });
    _folderSettings.connect('changed::folder-children', () => {
        let folders = _folderSettings.get_strv('folder-children');
        folders.forEach(id => {
            let path = _folderSettings.path + 'folders/' + id + '/';
            log(path);
        });
    });
    let folders = _folderSettings.get_strv('folder-children');
    folders.forEach(id => {
        let path = _folderSettings.path + 'folders/' + id + '/';
        log(path);
    });
    log(_folderSettings); */

    modules.forEach(module => {
        module.enable();
    });
}

// eslint-disable-next-line no-unused-vars
function disable() {
    modules.reverse().forEach(module => {
        module.disable();
    });
}

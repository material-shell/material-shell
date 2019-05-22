const Me = imports.misc.extensionUtils.getCurrentExtension();
const LeftPanelModule = Me.imports.module.leftPanel.leftPanelModule.LeftPanelModule;
const WorkspaceLayoutModule = Me.imports.module.workspaceLayout.workspaceLayoutModule.WorkspaceLayoutModule;
const TilingManagerModule = Me.imports.module.tilingManagerModule.TilingManagerModule;
const NoTitleBarModule = Me.imports.module.noTitleBarModule.NoTitleBarModule;

//const AggregateMenu = imports.ui.panel.AggregateMenu;

let leftPanelModule, workspaceLayoutModule, tilingManagerModule, noTitleBarModule;

// eslint-disable-next-line no-unused-vars
function init() {
    leftPanelModule = new LeftPanelModule();
    tilingManagerModule = new TilingManagerModule();
    workspaceLayoutModule = new WorkspaceLayoutModule();
    noTitleBarModule = new NoTitleBarModule();
}

// eslint-disable-next-line no-unused-vars
function enable() {
    leftPanelModule.enable();
    workspaceLayoutModule.enable();
    tilingManagerModule.enable();
    noTitleBarModule.enable();
}

// eslint-disable-next-line no-unused-vars
function disable() {
    leftPanelModule.disable();
    workspaceLayoutModule.disable();
    tilingManagerModule.disable();
    noTitleBarModule.disable();
}

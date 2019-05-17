const Me = imports.misc.extensionUtils.getCurrentExtension();
const LeftPanelModule = Me.imports.module.leftPanelModule.LeftPanelModule;
const WorkspaceLayoutModule = Me.imports.module.workspaceLayout.workspaceLayoutModule.WorkspaceLayoutModule;

//const AggregateMenu = imports.ui.panel.AggregateMenu;

let leftPanelModule, workspaceLayoutModule;

// eslint-disable-next-line no-unused-vars
function init() {
    leftPanelModule = new LeftPanelModule();
    workspaceLayoutModule = new WorkspaceLayoutModule();
}

// eslint-disable-next-line no-unused-vars
function enable() {
    leftPanelModule.enable();
    workspaceLayoutModule.enable();
}

// eslint-disable-next-line no-unused-vars
function disable() {
    leftPanelModule.disable();
    workspaceLayoutModule.disable();
}

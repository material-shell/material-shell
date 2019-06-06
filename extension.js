const Me = imports.misc.extensionUtils.getCurrentExtension();
const LeftPanelModule = Me.imports.module.leftPanel.leftPanelModule.LeftPanelModule;
const WorkspaceEnhancerModule = Me.imports.module.workspaceEnhancer.workspaceEnhancerModule.WorkspaceEnhancerModule;
const NoTitleBarModule = Me.imports.module.noTitleBarModule.NoTitleBarModule;

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

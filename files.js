const Me = imports.misc.extensionUtils.getCurrentExtension();

var Layout = {
    Column: Me.imports.layout.column.Column,
    Row: Me.imports.layout.row.Row,
    Stack: Me.imports.layout.stack.Stack
};

var Module = {
    LeftPanelModule:
        Me.imports.module.leftPanel.leftPanelModule.LeftPanelModule,
    WorkspaceEnhancerModule:
        Me.imports.module.workspaceEnhancer.workspaceEnhancerModule
            .WorkspaceEnhancerModule,
    NoTitleBarModule: Me.imports.module.noTitleBarModule.NoTitleBarModule,
    RequiredSettingsModule:
        Me.imports.module.requiredSettingsModule.RequiredSettingsModule,
    HotKeysModule: Me.imports.module.hotKeysModule.HotKeysModule
};

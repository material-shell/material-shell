const Me = imports.misc.extensionUtils.getCurrentExtension();
const WorkspaceList = Me.imports.widget.workspaceList.WorkspaceList;

/* exported WorkspaceListSubModule */
var WorkspaceListSubModule = class WorkspaceListSubModule {
    constructor(panel) {
        this.panel = panel;
        this.workspaceList = new WorkspaceList();
    }

    enable() {
        this.panel._leftBox.add_child(this.workspaceList);
    }

    disable() {
        this.panel._leftBox.remove_child(this.workspaceList);
    }
};

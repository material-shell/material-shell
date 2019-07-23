const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { NoTitleBarModule } = Me.imports.module.noTitleBarModule;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {

  constructor(superWorkspace) {
    super(superWorkspace)
    this.windows.forEach(window=>{
      this.setTitleBarVisibilty(window, true);
    });
  }

  onWindowsChanged() {
    super.onWindowsChanged();
    this.windows.forEach(window=>{
      this.setTitleBarVisibilty(window, true);
    });
  }

  onDestroy() {
    this.windows.forEach(window=>{
      this.setTitleBarVisibilty(window, false);
    });
    super.onDestroy();
  }
  onTile() {
  }
};

FloatLayout.key = 'float';

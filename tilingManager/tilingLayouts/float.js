const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;
const { NoTitleBarModule } = Me.imports.module.noTitleBarModule;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {

  onTile() {
    log('tile for real', this.superWorkspace.categoryKey);
    let [dialogWindows, regularWindows] = this.getDialogAndRegularWindows();
    this.onTileRegulars(regularWindows);
    this.onTileDialogs(dialogWindows);
  }

  onTileRegulars(windows) {
    windows.forEach(window=>{
      this.setTitleBarVisibilty(window, true);
    })
  }

  onTileDialogs(windows) {
  }
};

FloatLayout.key = 'float';

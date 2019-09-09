const { PACKAGE_VERSION } = imports.misc.config;
const Tweener = imports.ui.tweener;

var ShellVersionMatch = function(version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

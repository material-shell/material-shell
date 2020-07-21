/** Gnome libs imports */
const { PACKAGE_VERSION } = imports.misc.config;

/* exported ShellVersionMatch */
var ShellVersionMatch = function (version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

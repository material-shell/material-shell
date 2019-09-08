const { PACKAGE_VERSION } = imports.misc.config;

var ShellVersionMatch = function(version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

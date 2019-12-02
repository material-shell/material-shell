const { PACKAGE_VERSION } = imports.misc.config;

// eslint-disable-next-line no-unused-vars
var ShellVersionMatch = function(version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
};

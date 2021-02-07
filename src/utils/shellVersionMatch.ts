const { PACKAGE_VERSION } = imports.misc.config;

/* exported ShellVersionMatch*/
export function ShellVersionMatch(version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
}

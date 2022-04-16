const { PACKAGE_VERSION } = imports.misc.config;

/* exported ShellVersionMatch*/
export function ShellVersionMatch(version: string) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
}

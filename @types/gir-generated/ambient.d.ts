// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript

declare module 'gettext' {
    const Gettext: typeof import('./gettext.js').default;
    export default Gettext;

    export const LocaleCategory: typeof import('./gettext.js').LocaleCategory;
    export const setlocale: typeof import('./gettext.js').setlocale;
    export const textdomain: typeof import('./gettext.js').textdomain;
    export const bindtextdomain: typeof import('./gettext.js').bindtextdomain;
    export const gettext: typeof import('./gettext.js').gettext;
    export const dgettext: typeof import('./gettext.js').dgettext;
    export const dcgettext: typeof import('./gettext.js').dcgettext;
    export const ngettext: typeof import('./gettext.js').ngettext;
    export const dngettext: typeof import('./gettext.js').dngettext;
    export const pgettext: typeof import('./gettext.js').pgettext;
    export const dpgettext: typeof import('./gettext.js').dpgettext;
    export const domain: typeof import('./gettext.js').domain;
}

declare module 'system' {
    const System: typeof import('./gettext.js').default;
    export default System;

    export const programInvocationName: typeof import('./system.js').programInvocationName;
    export const version: typeof import('./system.js').version;
    export const programPath: typeof import('./system.js').programPath;
    export const programArgs: typeof import('./system.js').programArgs;
    export const exit: typeof import('./system.js').exit;
    export const addressOfGObject: typeof import('./system.js').addressOfGObject;
    export const addressOf: typeof import('./system.js').addressOf;
    export const gc: typeof import('./system.js').gc;
    export const refcount: typeof import('./system.js').refcount;
    export const dumpHeap: typeof import('./system.js').dumpHeap;
    export const dumpMemoryInfo: typeof import('./system.js').dumpMemoryInfo;
}

declare module 'cairo' {
    const Cairo: typeof import('./cairo.js').default;
    export default Cairo;
}

export enum LocaleCategory {
    ALL,
    COLLATE,
    CTYPE,
    MESSAGES,
    MONETARY,
    NUMERIC,
    TIME,
}
export function setlocale(category: number, locale: string | null): string;
export function textdomain(domainname: string | null): string;
export function bindtextdomain(
    domainname: string,
    dirname: string | null
): string;
export function gettext(msgid: string): string;
export function dgettext(domainname: string | null, msgid: string): string;
export function dcgettext(
    domainname: string | null,
    msgid: string,
    category: number
): string;
export function ngettext(
    msgid: string,
    msgid_plural: string,
    n: number
): string;
export function dngettext(
    domainname: string,
    msgid: string,
    msgid_plural: string,
    n: number
): string;
export function pgettext(context: string, msgid: string): string;
export function dpgettext(
    dom: string | null,
    context: string,
    msgid: string
): string;
export function domain(domainName: string): {
    gettext: (msgid: string) => string;
    ngettext: (msgid: string, msgid_plural: string, n: number) => string;
    pgettext: (context: string, msgid: string) => string;
};

declare const Gettext: {
    LocaleCategory: typeof LocaleCategory;
    setlocale: typeof setlocale;
    textdomain: typeof textdomain;
    bindtextdomain: typeof bindtextdomain;
    gettext: typeof gettext;
    dgettext: typeof dgettext;
    dcgettext: typeof dcgettext;
    ngettext: typeof ngettext;
    dngettext: typeof dngettext;
    pgettext: typeof pgettext;
    dpgettext: typeof dpgettext;
    domain: typeof domain;
};

export default Gettext;

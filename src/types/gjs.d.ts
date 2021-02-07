/// Handwritten typedefs for Gjs.
/// Copied from https://github.com/sammydre/ts-for-gjs

export namespace byteArray {
    export class ByteArray {
        constructor(lenOrArray: any); // May be a Uint8Array or any type accepted
        // as a single arg by its constructor
        toGBytes(): any; // GLib.Bytes?
        toString(encoding?: string): string;
        length: number;
        static get(
            target: ByteArray,
            prop: number,
            receiver?: ByteArray
        ): number;
        static set(
            target: ByteArray,
            prop: number,
            val: number,
            receiver?: ByteArray
        ): number;
        _array: Uint8Array;
    }
    export function fromString(input: string): Uint8Array;
    export function fromArray(input: number[]): ByteArray; // Odd one out for legacy reasons
    export function fromGBytes(input: any): Uint8Array;
    export function toString(x: Uint8Array): string;
}
export namespace console {
    export function interact(): void;
}
export namespace Lang {
    // TODO: There is a lot more in Lang
    export function Class(props: any): void;
}
export namespace gettext {
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
    export function domain(
        domainName: string
    ): {
        gettext: (msgid: string) => string;
        ngettext: (msgid: string, msgid_plural: string, n: number) => string;
        pgettext: (context: any, msgid: string) => any;
    };
}
export namespace Format {
    export function vprintf(str: string, args: string[]): string;
    export function printf(fmt: string, ...args: any[]): void;
    // Following docs from gjs/modules/format.js
    /**
     * This function is intended to extend the String object and provide
     * an String.format API for string formatting.
     * It has to be set up using String.prototype.format = Format.format;
     * Usage:
     * "somestring %s %d".format('hello', 5);
     * It supports %s, %d, %x and %f, for %f it also support precisions like
     * "%.2f".format(1.526). All specifiers can be prefixed with a minimum
     * field width, e.g. "%5s".format("foo"). Unless the width is prefixed
     * with '0', the formatted string will be padded with spaces.
     */
    export function format(fmt: string, ...args: any[]): string;
}
export namespace Mainloop {
    export function quit(name: string): void;
    export function idle_source(handler: any, priority: number): any;
    export function idle_add(handler: any, priority: number): any;
    export function timeout_source(
        timeout: any,
        handler: any,
        priority: number
    ): any;
    export function timeout_seconds_source(
        timeout: any,
        handler: any,
        priority: number
    ): any;
    export function timeout_add(
        timeout: any,
        handler: any,
        priority: number
    ): any;
    export function timeout_add_seconds(
        timeout: any,
        handler: any,
        priority: number
    ): any;
    export function source_remove(id: any): any;
    export function run(name: string): void;
}

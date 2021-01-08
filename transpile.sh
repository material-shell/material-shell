#!/bin/sh

for file in $(find target -name '*.js'); do
    sed -i \
        -e 's#export function#function#g' \
        -e 's#export var#var#g' \
        -e 's#export const#var#g' \
        -e 's#Object.defineProperty(exports, "__esModule", { value: true });#var exports = {};#g' \
        "${file}"
    sed -i -E "s/import \* as Gio from ['\"]Gio['\"];/const { Gio } = imports.gi;/g" "${file}"
    sed -i -E "s/import \* as GLib from ['\"]GLib['\"];/const { GLib } = imports.gi;/g" "${file}"
    sed -i -E 's/export class ([a-zA-Z]+)/var \1 = class \1/g' "${file}"
    sed -i -E "s/import \* as ([a-zA-Z]+) from ['\"]([\w\/]+)['\"]/const \1 = Me.imports.\2/g" "${file}"
    sed -i -E "s/import \{([^\}]+)\} from ['\"]src\/([a-zA-Z\/]+)['\"]/const {\1} = Me.imports.src.\2/g" "${file}"
    # Replace / with . in import path.
    # May have to do it a few times since each replacement will only replace a single / in the path.
    sed -i -E "s/(Me\.imports\.src\.[^;]+)\/([^;]+)/\1.\2/g" "${file}"
    sed -i -E "s/(Me\.imports\.src\.[^;]+)\/([^;]+)/\1.\2/g" "${file}"
    sed -i -E "s/(Me\.imports\.src\.[^;]+)\/([^;]+)/\1.\2/g" "${file}"
done

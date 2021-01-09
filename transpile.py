#!/usr/bin/env python3
from glob import glob
import re

patterns = [
    # GJS doesn't know about exports, it just exports everything
    (re.compile(r"export function"), r"function"),
    (re.compile(r"export var"), r"var"),
    (re.compile(r"export const"), r"var"),
    (re.compile(r"export class ([\w\-_\d]+)"), r"var \1 = class \1"),
    # Typescript generates this sometimes, especially when using class decorators
    # We can just remove it since it will also have generated a `let` declaration above.
    (re.compile(r"export \{ ([\w\-_\d]+) \}"), r""),

    (re.compile(r"Object.defineProperty(exports, \"__esModule\", { value: true });"), r"var exports = {};"),
    # Replace our typechecked imports with what GJS uses
    (re.compile(r"import \* as Gio from ['\"]Gio['\"];"), r"const { Gio } = imports.gi;"),
    (re.compile(r"import \* as GLib from ['\"]GLib['\"];"), r"const { GLib } = imports.gi;"),
    (re.compile(r"import \* as GObject from ['\"]GObject['\"];"), r"const { GObject } = imports.gi;"),
    (re.compile(r"import \* as St from ['\"]St['\"];"), r"const { St } = imports.gi;"),
    (re.compile(r"import \* as Meta from ['\"]Meta['\"];"), r"const { Meta } = imports.gi;"),
    (re.compile(r"import \* as Clutter from ['\"]Clutter['\"];"), r"const { Clutter } = imports.gi;"),

    # Replace `import * as Something from 'a/b/c` with `const Something = Me.imports.a/b/c` The slashes will be replaced later.
    (re.compile(r"import \* as ([\w\-_\d]+) from ['\"]([\w\-\d\/]+)['\"]"), r"const \1 = Me.imports.\2"),
    # Replace `import { Something, Else } from 'src/a/b/c` with `const { Something, Else } = Me.imports.src.a/b/c` The slashes will be replaced later.
    (re.compile(r"import \{([^\}]+)\} from ['\"]src\/([\w\-_\d\/]+)['\"]"), r"const {\1} = Me.imports.src.\2"),
    # Replace / with . in import paths.
    # May have to do it a few times since each replacement will only replace a single / in the path.
    (re.compile(r"(Me\.imports\.src[^;]*)\/([^;]+);"), r"\1.\2"),
    (re.compile(r"(Me\.imports\.src[^;]*)\/([^;]+);"), r"\1.\2"),
    (re.compile(r"(Me\.imports\.src[^;]*)\/([^;]+);"), r"\1.\2"),
    (re.compile(r"(Me\.imports\.src[^;]*)\/([^;]+);"), r"\1.\2"),

    # When a class has been decorated with @registerGObjectClass we want to change its constructor to be an _init function instead
    # because that's what GJS recommends. Typescript however likes constructors a lot more for typechecking purposes
    # so we do this hack after the compilation process. Essentially it renames the constructor to _init.
    # The compiled code will look like
    # ```
    # let TestClass = (() => {
    #     let TestClass = class TestClass extends ... {
    #         constructor(params) {
    #             super(params);
    #             this.my_field = false;
    #             log("Constructor: " + params.testparam);
    #         }
    #         ...
    #     };
        
    #     TestClass = __decorate([
    #         registerGObjectClass
    #     ], TestClass);
    #     return TestClass;
    # })();
    # ```
    # so we match against that pattern and try to rename the constructor.
    # The pattern matches against a few things that are not strictly necesary, just to avoid potential issues with e.g. comments that
    # include the word `constructor` or things like that.
    (re.compile(r"(let ([\w\d_]+) = .*class \2.*)constructor(\s*\(.*\2 = __decorate\(\[\s*registerGObjectClass)", re.DOTALL), r"\1_init\3"),

    # In the constructor we will always have a `super(...)` call (this is enforced by typescript).
    # We have to replace this with `super._init(...)` since we just renamed the constructor to _init
    (re.compile(r"(_init\s*\(.*?\)\s*\{\s*)super\(", re.DOTALL), r"\1super._init("),
]

for file in glob("target/**/*.js", recursive=True):
    with open(file) as f:
        text = f.read()
        for (regex, replacement) in patterns:
            text = regex.sub(replacement, text)

        meImport = text.find("const Me = imports")
        firstOtherImport = text.find("= Me.imports")
        if meImport > firstOtherImport and firstOtherImport != -1:
            print(f"The `Me` constant needs to be defined before any imports.\nError in file: {file}")
            exit(1)
        elif meImport == -1 and firstOtherImport != -1:
            print(f"The `Me` constant needs to be defined for imports to work, but it was not found.\nError in file: {file}")
            exit(1)

    with open(file, "w") as f:
        f.write(text)


#!/usr/bin/env python3
import pathlib
import re
from glob import glob
from subprocess import call

dir = pathlib.Path(__file__).parent.absolute().parent

call(["../gi.ts/packages/cli/bin/run", "generate"], cwd=dir)

for file in dir.glob("@gi-types/**/*.d.ts"):
    with open(file) as f:
        text = f.read()
        text = re.sub(r"(import \* as \w+ from \")(\w+\")", r"\1./\2", text)
        text = text.replace("get_target(): Cogl.Material;", "// get_target(): Cogl.Material;")
        text = text.replace("static [\"new\"](sig: A, value: any): Variant;",
                            "// static [\"new\"](sig: A, value: any): Variant;")
        text = text.replace("static _new_internal(sig: A, value: any): any;",
                            "// static _new_internal(sig: A, value: any): any;")
        text = text.replace("relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number);",
                            "relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;"
                            )
        text = text.replace("child_type?: VariantType<C> | null,",
                            "child_type: VariantType<C>,")

        # The return values can never be null, this is a bug in the gir file parsing
        text = text.replace(
            "get_preferred_width(for_height: number): [number | null, number | null];", "get_preferred_width(for_height: number): [number, number];")
        text = text.replace(
            "get_preferred_height(for_width: number): [number | null, number | null];", "get_preferred_height(for_width: number): [number, number];")

        # Clutter typedefs are incorrect, parents can definitely be null
        text = text.replace("get_parent(): Actor;", "get_parent(): Actor | null;")
    with open(file, "w") as f:
        f.write(text)

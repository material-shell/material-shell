#!/usr/bin/env python3
from glob import glob
from subprocess import call
import re
import pathlib

dir = pathlib.Path(__file__).parent.absolute().parent

call(["../gi.ts/packages/cli/bin/run", "generate"], cwd=dir)

for file in dir.glob("types/*.d.ts"):
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
    with open(file, "w") as f:
        f.write(text)

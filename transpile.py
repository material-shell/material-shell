#!/usr/bin/env python3
from glob import glob
import re
from comby import Comby
import shlex
for file in glob("target/**/*.js", recursive=True):
    with open(file) as f:
        text = f.read()
        
        if len(text) == 0:
            continue

        meImport = text.find("const Me = imports")
        firstOtherImport = text.find("= Me.imports")
        if meImport > firstOtherImport and firstOtherImport != -1:
            print(f"The `Me` constant needs to be defined before any imports.\nError in file: {file}")
            exit(1)
        elif meImport == -1 and firstOtherImport != -1:
            print(f"The `Me` constant needs to be defined for imports to work, but it was not found.\nError in file: {file}")
            exit(1)

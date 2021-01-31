#!/bin/env python3
import subprocess
import os
import shutil
from shutil import which

def install():
    RED="\33[31m"
    GREEN="\33[32m"
    RESET="\33[0m"

    install_directory = os.path.expanduser("~/.local/share/gnome-shell/extensions")
    install_name = "material-shell@papyelgringo"
    install_path = os.path.join(install_directory, install_name)
    source_dir = os.path.join(os.getcwd(), "target")

    # Check if node and npm are installed
    if which("npm") is None:
        print(RED + "npm could not be found. You need to install npm to build material-shell. See https://www.npmjs.com/get-npm" + RESET)
        exit(1)

    if which("node") is None:
        print(RED + "node could not be found. You need to install node to build material-shell. See https://nodejs.org/en/" + RESET)
        exit(1)
    
    # Check if the extensions directory exists
    if not os.path.isdir(install_directory):
        print(RED + f"Cannot find the gnome extensions directory '{install_directory}'. Are you sure you are running gnome-shell?" + RESET)
        exit(1)
    
    # Install dependencies
    print(f"{GREEN}Installing dependencies...{RESET}")
    if subprocess.call(["npm", "install"]) != 0:
        print(f"{RED}Failed to install dependencies{RESET}")
        exit(1)
    
    # Compile the typescript code
    print(f"{GREEN}Compiling...{RESET}")
    if subprocess.call(["make", "compile"]) != 0:
        print(f"{RED}Compilation failed{RESET}")
        exit(1)

    print(f"{GREEN}Installing extension...{RESET}")

    def create_link():
        os.symlink(source_dir, install_path)
    
    # Check if material-shell is already installed
    if os.path.exists(install_path):
        if os.path.realpath(install_path) == os.path.realpath(source_dir):
            # Either this directory has been put directly in the extensions directory
            # or there's already a symlink there pointing to this directory
            print(f"{GREEN}Extension is already installed, skipping")
        elif os.path.islink(install_path):
            # There's a symlink pointing to another install.
            # Removing this is fine, it doesn't delete any data
            print(f"{GREEN}Removing previous install symlink...{RESET}")
            os.remove(install_path)
            create_link()
        else:
            # There's already an actual folder (not a symlink) with a material-shell install.
            # We need to delete that folder if we want to be able to install this version of the extension.
            print(f"{RED}Material-shell has already been installed separately, do you want to delete that installation?{RESET}")
            response = input(f"{RED}Warning: This will delete the existing directory at '{install_path}' [y/N]{RESET}")
            if response in ["y", "yes"]:
                print(f"{GREEN}Removing previous install...{RESET}")
                shutil.rmtree(install_path)
                create_link()
            else:
                print(f"{RED}Cannot install material-shell...{RESET}")
                exit(1)
    else:
        # Easy path: the extension wasn't already installed
        create_link()

    print(f"{GREEN}Installation succeeded, restarting gnome-shell...{RESET}")
    if subprocess.call(["killall", "-SIGQUIT", "gnome-shell"]) != 0:
        print(f"{RED}Failed to restart gnome-shell{RESET}")
        exit(1)

install()

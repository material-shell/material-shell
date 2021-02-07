#!/usr/bin/env python3
import subprocess
import os
import shutil
from shutil import which

# Ansi escape codes to get colors in terminals
RED = "\33[31m"
GREEN = "\33[32m"
YELLOW = "\33[33m"
RESET = "\33[0m"

''' Prints some text with a color '''
def printc(color: str, text: str):
    print(f"{color}{text}{RESET}")

# Tries to invoke a command line tool
# Returns false if the program exited with a non-zero error code or if the program failed to be executed.
def try_call(params):
    try:
        subprocess.check_call(params)
        return True
    except Exception as e:
        print(e)
        return False

def install():
    package_dir = os.path.join(os.path.dirname(__file__), "..")

    # Guard against users potentially running this script from the wrong directory
    os.chdir(package_dir)

    # Where gnome-shell extensions live
    install_directory = os.path.expanduser("~/.local/share/gnome-shell/extensions")
    # Under what name we want to install the extension as
    install_name = "material-shell@papyelgringo"
    install_path = os.path.join(install_directory, install_name)

    # This folder contains all the compiled code and assets.
    # Note that this must be relative at this point because this whole directory
    # may be moved (see below)
    dist_dir = "./dist"

    # Check if node and npm are installed
    if which("npm") is None:
        printc(RED, "npm could not be found. You need to install npm to build material-shell. See https://www.npmjs.com/get-npm")
        exit(1)

    if which("node") is None:
        printc(RED, "node could not be found. You need to install node to build material-shell. See https://nodejs.org/en/")
        exit(1)

    # Check if the extensions directory exists
    if not os.path.isdir(install_directory):
        printc(
            RED, f"Cannot find the gnome extensions directory '{install_directory}'. Are you sure you are running gnome-shell?")
        exit(1)

    # Install dependencies
    printc(GREEN, f"Installing dependencies...")
    if not try_call(["npm", "install", "--silent"]):
        printc(RED, f"Failed to install dependencies")
        exit(1)

    # Compile the typescript code
    printc(GREEN, f"Compiling...")
    if not try_call(["make", "compile"]):
        printc(RED, f"Compilation failed")
        exit(1)

    printc(GREEN, f"Installing extension...")

    def create_link():
        os.symlink(os.path.realpath(dist_dir), install_path)

    # Check if material-shell is already installed
    # Note that os.path.exists returns false if a symlink exists at the path, but it is broken. So we need to check islink too.
    if os.path.exists(install_path) or os.path.islink(install_path):
        if os.path.realpath(install_path) == os.path.realpath(dist_dir):
            # There's already a symlink there pointing to the right directory
            printc(GREEN, f"Extension is already installed, skipping")
        elif os.path.islink(install_path):
            # There's a symlink pointing to another install.
            # Removing this is fine, it doesn't delete any data
            printc(GREEN, f"Removing previous install symlink...")
            os.remove(install_path)
            create_link()
        elif os.path.realpath(install_path) == os.path.realpath(os.getcwd()):
            # The user has installed the extension by cloning directly in the extension folder.
            # We can't handle that when using typescript because we need the `target` directory to be the one that gnome knows about.
            # So we ask the user to move the install instead.
            printc(RED, f"You have installed material-shell directly in the extensions folder. This is not supported anymore.")
            response = input(f"{RED}Would you like to move the installation to your home folder? [y/N]{RESET}")
            if response in ["y", "yes"]:
                new_path = os.path.expanduser("~/material-shell")
                printc(GREEN, f"Moving installation to '{new_path}`...")

                if os.path.exists(new_path):
                    printc(RED, f"Cannot move installation, the target direcory ({new_path}) already exists")
                    exit(1)

                os.rename(install_path, new_path)

                create_link()
            else:
                printc(RED, f"Aborting installation...")
                exit(1)
        else:
            # There's already an actual folder (not a symlink) with a material-shell install.
            # We need to delete that folder if we want to be able to install this version of the extension.
            printc(RED, f"Material-shell has already been installed separately, do you want to delete that installation?")
            response = input(f"{RED}Warning: This will delete the existing directory at '{install_path}' [y/N]{RESET}")
            if response in ["y", "yes"]:
                printc(GREEN, f"Removing previous install...")
                shutil.rmtree(install_path)
                create_link()
            else:
                printc(RED, f"Aborting installation...")
                exit(1)
    else:
        # Easy path: the extension wasn't already installed
        create_link()

    printc(GREEN, f"Enabling extension...")
    if not try_call(["gnome-extensions", "enable", install_name]):
        printc(RED, f"Failed to enable extension. Try enabling it using the gnome extensions preferences instead")
        exit(1)

    # Determine if we are using x11 or wayland
    window_manager = subprocess.check_output(
        ["bash", "-c", "loginctl show-session $(loginctl | grep $(whoami) | awk '{print $1}') -p Type"]).decode('utf-8').strip()

    if window_manager == "Type=x11":
        printc(GREEN, "Installation succeeded, restarting gnome-shell...")

        # Restart gnome shell
        if not try_call(["killall", "-SIGQUIT", "gnome-shell"]):
            printc(RED, "Failed to restart gnome-shell")
            exit(1)
    else:
        # Probably wayland
        # It's not possible to restart gnome-shell gracefully when using wayland
        printc(YELLOW, "Installation succeeded. To activate material-shell, please log out and log in again.")
        exit(1)


install()

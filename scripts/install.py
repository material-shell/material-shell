#!/bin/env python3
import subprocess
import os
import shutil
from shutil import which


def install():
    RED = "\33[31m"
    GREEN = "\33[32m"
    YELLOW = "\33[33m"
    RESET = "\33[0m"

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
    target_dir = "./target"

    # Check if node and npm are installed
    if which("npm") is None:
        print(RED + "npm could not be found. You need to install npm to build material-shell. See https://www.npmjs.com/get-npm" + RESET)
        exit(1)

    if which("node") is None:
        print(RED + "node could not be found. You need to install node to build material-shell. See https://nodejs.org/en/" + RESET)
        exit(1)

    # Check if the extensions directory exists
    if not os.path.isdir(install_directory):
        print(
            RED + f"Cannot find the gnome extensions directory '{install_directory}'. Are you sure you are running gnome-shell?" + RESET)
        exit(1)

    # Install dependencies
    print(f"{GREEN}Installing dependencies...{RESET}")
    if subprocess.call(["npm", "install", "--silent"]) != 0:
        print(f"{RED}Failed to install dependencies{RESET}")
        exit(1)

    # Compile the typescript code
    print(f"{GREEN}Compiling...{RESET}")
    if subprocess.call(["make", "compile"]) != 0:
        print(f"{RED}Compilation failed{RESET}")
        exit(1)

    print(f"{GREEN}Installing extension...{RESET}")

    def create_link():
        os.symlink(os.path.realpath(target_dir), install_path)

    # Check if material-shell is already installed
    if os.path.exists(install_path):
        if os.path.realpath(install_path) == os.path.realpath(os.getcwd()):
            # The user has installed the extension by cloning directly in the extension folder.
            # We can't handle that when using typescript because we need the `target` directory to be the one that gnome knows about.
            # So we ask the user to move the install instead.
            print(f"{RED}You have installed material-shell directly in the extensions folder. This is not supported anymore.{RESET}")
            response = input(f"{RED}Would you like to move the installation to your home folder? [y/N]{RESET}")
            if response in ["y", "yes"]:
                new_path = os.path.expanduser("~/material-shell")
                print(f"{GREEN}Moving install to '{new_path}`...")

                if os.path.exists(new_path):
                    print(f"{RED}Cannot move install, the target direcory ({new_path}) already exists{RESET}")
                    exit(1)

                os.rename(install_path, new_path)

                create_link()
            else:
                print(f"{RED}Aborting installation...{RESET}")
                exit(1)
        elif os.path.realpath(install_path) == os.path.realpath(target_dir):
            # There's already a symlink there pointing to the right directory
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
                print(f"{RED}Aborting installation...{RESET}")
                exit(1)
    else:
        # Easy path: the extension wasn't already installed
        create_link()

    print(f"{GREEN}Enabling extension...{RESET}")
    if subprocess.call(["gnome-extensions", "enable", install_name]) != 0:
        print(f"{RED}Failed to enable extension. Try enabling it using the gnome extensions preferences instead{RESET}")
        exit(1)

    # Determine if we are using x11 or wayland
    window_manager = subprocess.check_output(
        ["bash", "-c", "loginctl show-session $(loginctl | grep $(whoami) | awk '{print $1}') -p Type"]).decode('utf-8').strip()

    if window_manager == "Type=x11":
        print(f"{GREEN}Installation succeeded, restarting gnome-shell...{RESET}")

        # Restart gnome shell
        if subprocess.call(["killall", "-SIGQUIT", "gnome-shell"]) != 0:
            print(f"{RED}Failed to restart gnome-shell{RESET}")
            exit(1)
    else:
        # Probably wayland
        # It's not possible to restart gnome-shell gracefully when using wayland
        print(f"{YELLOW}Installation succeeded. To activate material-shell, please log out and log in again.")
        exit(1)


install()

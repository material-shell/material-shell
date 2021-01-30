![Material Shell](/documentation/on-all-full.svg)

---
<p align="center">
        A <b>modern desktop interface</b> for <b>Linux</b> extending <b><a href="https://wiki.gnome.org/Projects/GnomeShell">GNOME Shell</a></b>.
</p>
<p align="center">
Providing an <b>unique</b>, <b>simple</b>, <b>productivity oriented</b>, <b>innovative</b> and <b>automated</b> <b>mouse and keyboard <a href="#workflow">workflow</a></b> which aims to be <b>faster</b> and <b>easier</b> to use and creates a <b>great user experience</b>.
</p>
<p align="center">
        Powered by its unique <b><a href="#spatial-model">spatial model</a></b>, its modern <b><a href="#interface">material design interface</a></b>, its <b><a href="#tiling-engine">tiling engine</a></b> and its <b><a href="#persistence">persistability</a></b>.
</p>

<h4 align="center" valign="middle">
Get notified about updates and join us at ‎‎<a href="https://discord.gg/vBb7D9a">
        <img valign="middle" src="https://img.shields.io/discord/584783412959641716?logo=discord&style=for-the-badge"
            alt="chat on Discord">
</a>
</h4>
<p align="center">
  <a href="#workflow">Workflow</a> •
  <a href="#hotkeys">Hotkeys</a> •
  <a href="#installation">Installation</a> •
  <a href="#uninstallation-">Uninstallation</a> •
  <a href="#history">History</a>
</p>

---

![Demo GIF](documentation/general_showcase.gif)

---

# Workflow

Created to **simplify** navigation and **reduce** the need to **manipulate** windows in order to **improve productivity**. It's meant to be 100% **predictable** and bring the benefits of tools coveted by professionals to everyone. 

## Spatial Model

This is the **core** of the **workflow** and what everything is built around and in our case it's one of the simplest: **a Grid**

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/spatialisation.gif"
            alt="Spatialisation illustrated">
</p>

A **Workspace** is an applications container that can be **visualized as a row** and **applications as cells**.

Every **new application** is **automatically positioned** inside this grid at the end of its workspace row and every **new workspaces** are **appended at the bottom** which is very **predictable** and **always sorted automatically**.

This allow us to provide **intuitive navigation** by moving the screen around a larger context. Navigating **up** and **down** will change the current workspace and navigating **left** and **right** change the current window(s) on screen.

You can organize your applications by use cases as **activities** or by applications type as **categories**.

## Interface

Designed to represent the **state** of the **workflow** and provide **navigation** capabilities for both a **mouse** and a **touchscreen**.

### Layout

The interface is divided in **two parts**:

In the **left panel** everything pertains to the **system**: workspaces state, current system status, notifications, etc.

On the **right** of the left panel everything pertains to the **active workspace**: the windows on the workspace's row, the layout switcher, and the windows themselves.

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/interface_showcase.gif"
            alt="Interface layout illustrated">
</p>

The two most important components are the **system panel** (on the left) and the **workspace panel** (on the top).

#### System panel
The system panel is the main component of the left side of the interface. It consists of:
* **Workspace list and switcher**: This component lists all the workspaces available and the currently selected one. It allows us to navigate to a specific workspace by clicking on its icon.
* **System tray**: This component lists all the information about the system, e.g. network status, bluetooth connectivity, volume, battery, and notification icons.

#### Workspace panel
The workspace panel is the main component of the right side of the interface. It consists of:
* **App switcher**: This component lists all the application windows opened in the current workspace's row and the currently focused one. It allows us to navigate to a specific window within the row by selecting its item.
* **Layout switcher**: This component displays the current layout of the workspace and can be clicked to switch to the next available layout.

### Design
Made by following the **[Material Design guidelines](https://material.io)** - a solid baseline that allows us to provide an **aesthetically pleasing** and **highly accessible** interface. 

### Themes
You can choose between 3 different themes:
* Dark
* Light
* Primary (Colorful one)

And there is also a **blurry** version available for the more fancy ones !

## Tiling engine
It's the **tool** that **automatically organize** the application's **window** for you in a **predictable** and mutually **non-overlapping** disposition.

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/tiling_showcase.gif"
            alt="Tiling engine illustrated">
</p>

**Choose** at **any time** which tiling layout suit the most for your need:
* **Maximize**: Single window at a time
* **Split**: 2 windows side by side 
* **Column**: All windows displayed as columns (useful for ultra wide monitor)
* **Half**: One master window on the left then others windows stacked to the right
* **Grid**: All windows displayed as a grid

## Persistence
The **best way** to **configure** the desktop layout is to **not** have to **do it**.

Material Shell **keep track** of every **decisions** relative to the desktop layout: where are windows, in which workspaces in which order.

This allow to **configure** the layouts **on the go** while using it.

When opening a **new session** Material Shell will **restore every windows** previously present with a "**window placeholder** which allow you to reopen any of the previous window easily at the same spot you like to have them.


#### Brief Tutorial 
Learn the basics of Material Shell using the mouse and keyboard shortcuts.

Setup
1. For this tutorial, the first workspace will mimic traditional window behavior.
2. Click on the tiling icon in the upper right corner. Click on 'Tweak available layout'.
3. For this workspace, turn off all layout styles except floating. This window will be used to view this README.md file
4. To open a second work space, click on the + on the left side of the screen, or use *`Super+s`
5. Turn on the first 6 tiling choices on, e.g, maximize, split ... half vertical. Turn off the remaining, especially float.
6. Click on the tiling icon again and select Split. Increase the number of layouts to 4.
7. Use *`Super+x` to open the App Launcher and open 4 terminal windows. Once finished, there should be 4 vertical (Split) windows.
8. Execute a command in each terminal instance so that they are are distinguishable from each other, e.g. ls, nano, ping --help, man ping.
9. Cycle through the tiling layouts using Super+Spacebar. Notice that the tiling-layout icon updates to represent the current layout.
10.Experiment with keyboard shortcuts below including moving the focus, moving a window, and resizing a window.

Take note of the following:
1. The workspace icons are located on the left side of the screen and the window panes are located at the top of the screen.
2. When using a browser, the browser tabs are located below the window panes. They can be similar in appearance.
3. There isn't a keyboard/mouse equivalent of Maximize window. Use the tiling layout icon or Super+spacebar to return to a max window.
4. Tiling layout preferences are unique to the each  workspace (the preferences are not global setting for all workspaces).
5. To mimic traditional windows behavior, use the float setting. Tiling is turned off for that window.

## Hotkeys
Some hotkeys might already be used by GNOME Shell - please check your keybindings first.

#### Choosing tiling layout
* `Super+Space` Cycle through the tiling options in the current workspace.

#### Open and close a window
* `Super+x` Open the App Launcher within a new window.
* `Super+q` Kill the current focused window.

#### Navigation -- moving the focus 
... window panes 
* `Super+d` Focus on the next window pane, left to right.
* `Super+a` Focus on the previous window pane, right to left.

...workspaces 1 through 10
* `Super+1`, `Super+2` ... `Super+0` Navigate to specific workspace 1 - 10
* `Super+s` Focus on the next workspace 1 - 10 (down).
* `Super+w` Focus on the previous workspace 10 - 1 (up).

...multiple monitors -- Alt+Super+__
* `Alt+Super+left` Set focus to the left monitor.
* `Alt+Super+right` Set focus to the right monitor.
* `Alt+Super+down` Set focus to the downward monitor.
* `Alt+Super+up` Set focus to the upward monitor.

...to different workspaces and windows via switching applications (gnome key-binding)
* `Super+tab` Switch between applications

#### Moving a window
... in the current workspace
* `Super+left` Move the current window to the left.
* `Super+right` Move the current window to the right.
* `Super+up` Move the current window to upper workspace (top).
* `Super+down` Move the current window to lower workspace (bottom).
* `Shift+Super+1`, `Shift+Super+2`, ... `Shift+Super+0` Move window to specific workspace  

...to multiple monitors
* `Shift+Super+a` Move the current window to the monitor on the left.
* `Shift+Super+d` Move the current window to the monitor on the right.
* `Shift+Super+w` Move the current window to the upper workspace.
* `Shift+Super+s` Move the current window to the lower workspace.

... alternate combinations for multiple monitors (gnome keybindings)
* `Shift+Super+left` Move the current window to the left monitor.
* `Shift+Super+right` Move the current window to the right monitor.
* `Shift+Super+down` Move the current window to the downward monitor.
* `Shift+Super+up` Move the current window to the upward monitor. 

... in combination with the mouse
* `Super+[MouseDrag]` Move window around.

#### Resize a window
* `Ctrl+Super+left` Enlarge a window to the left.
* `Ctrl+Super+up` Enlarge a window upward.
* `Ctrl+Super+right`Enlarge an window to the  right.
* `Ctrl+Super+down` Enlarge a window downward.


#### Extra Hotkeys

* `Shift+Super+Space` Reverse cycle the tiling layout of the current workspace.
* `Super+Escape` Toggle the UI of Material-shell, like a Zen mode.

# Installation

#### Get it in two clicks (single-user installation, stable release)
* Navigate to [extensions.gnome.org](https://extensions.gnome.org/extension/3357/material-shell/)
* Switch the toggle ON

#### Get the most up to date version with Git (multi-user installation, in development)

1. Check your GNOME Shell version as we only support **gnome-shell >= 3.34.0**

2. Download the extension. Depending on your distribution, there are several ways to acquire it:

| Distribution | Install via | Command |
| :----------- | :---------- | :------ |
| Manjaro      | PACMAN      | `pacman -S gnome-shell-extension-material-shell` |
| Arch Linux   | AUR         | From latest master: `yay -S gnome-shell-extension-material-shell-git` |
| Arch Linux   | AUR         | From latest release: `yay -S gnome-shell-extension-material-shell` |
| Fedora       | DNF         | `sudo dnf install gnome-shell-extension-material-shell` |
| NixOS        | nix         | `nix-env -i gnome-shell-extension-material-shell` |
| Others       | source      | `git clone https://github.com/material-shell/material-shell.git ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo` |

(We appreciate package maintainers! If you would like to make a package available for your distro please submit a PR so it can be added here!)

3. Reload GNOME Shell:
  + On X.org: Hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in
  
4. Open `gnome-tweaks` and activate the `Material Shell` extension **OR** enable it using 
```bash
gnome-extensions enable material-shell@papyelgringo
```
## Recommended Additional Configuration
* GTK and GNOME Shell theme: [Plata Theme](https://gitlab.com/tista500/plata-theme)
* Icon theme: [Tela Icon Theme](https://github.com/vinceliuice/Tela-icon-theme)

# Uninstallation 😢
We're sad to see you go. Before you uninstall, leave us some feedback by [opening an issue](https://github.com/material-shell/material-shell/issues/new/choose) - it will be very helpful in improving Material Shell.

1. Open `gnome-tweaks` and disable the `Material Shell` extension **OR** disable it using 
```bash
gnome-extensions disable material-shell@papyelgringo
```
2. Delete the extension directory.
```bash
rm -rf ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
```
# History
The project is based on my earlier work on [Material Awesome](https://github.com/PapyElGringo/material-awesome).


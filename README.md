


![Material Shell](/documentation/on-all-full.svg)

---

A **simple** yet **productivity oriented** desktop interface for Linux that provides an **innovative** and **automated** **mouse and keyboard [workflow](./documentation/material-shell.md#workflow)** which aims to be **faster** and **easier** to use and creates a **great user experience**.
<h4 align="center" valign="middle">
Get notified about updates and join us at ‎‎<a href="https://discord.gg/vBb7D9a">
        <img valign="middle" src="https://img.shields.io/discord/584783412959641716?logo=discord&style=for-the-badge"
            alt="chat on Discord">
</a>
</h4>
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

---

![Demo GIF](demo.gif)

---

# Workflow

Created to **simplify** navigation and **reduce** the need to **manipulate** windows in order to **improve productivity**. It's meant to be 100% **predictible** and bring the benefits of tools covoted by professionnals to everyones. 

## Spatial Model

This is the **core** of the **workflow** and what everything is built around and in our case it's one of the simplest: **a Grid**

<br />

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/spatialisation.gif"
            alt="Spatialisation illustrated">
</p>

<br />

A **Workspace** is an applications container that can be **visualized as a row** and **applications as cells**.

Every **new application** is **automatically positioned** inside this grid at the end of its workspace's row and every **new workspaces** are **appended at the bottom** which is very **predictable** and **always sorted automatically**.

This allow us to provide **intuitive navigation** by moving the screen around a larger context. Navigating **up** and **down** will change the current workspace and navigating **left** and **right** change the current window(s) on screen.

You can organize your applications by usescases as **activities** or by applications type as **categories**.

## Interface

Designed to represent the **state** of the **workflow** and provide **navigation** capabilities for both a **mouse** and a **touchscreen**.

### Layout

The interface is divided in **two parts**:

In the **left panel** everything pertains to the **system**: workspaces state, current system status, notifications, etc.

On the **right** of the left panel everything pertains to the **active workspace**: the windows on the workspace's row, the layout switcher, and the windows themselves.

<br />

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/interface_showcase.gif"
            alt="Interface layout illustrated">
</p>

<br />

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
It's the **tool** that allow us to **automatically organize** the application's **window** for you in a **predictable** and mutually **non-overlapping** disposition.

<p align="center" valign="middle">
 <img align="center" valign="middle" src="./documentation/tiling_showcase.gif"
            alt="Tiling engine illustrated">
</p>
<br />

Choose at any time which tiling layout suit the most for your need:
* Maximize: Single window at a time
* Split: 2 windows side by side 
* Column: All windows displayed as columns (Usefull for ultra wide monitor)
* Half: One master window on the left then others windows stacked to the right
* Grid: All windows displayed as a grid

## Persistence
The simplest way we found for user configuration is to keep every user decision permanent, that's way the user configure his layouts on the go while using it. 

## Hotkeys
Some hotkeys might already be used by GNOME Shell - please check your keybindings first.
#### Desktop navigation
* `Super+W` Navigate to the upper workspace/category.
* `Super+S` Navigate to the lower workspace/category.
* `Super+A` Focus the window at the left of the current window.
* `Super+D` Focus the window at the right of the current window.
* `Super+1`, `Super+2` ... `Super+0` Navigate to specific workspace

#### Window manipulation
* `Super+Q` Kill the current window focused.
* `Super+[MouseDrag]` Move window around.
* `Super+Shift+A` Move the current window to the left.
* `Super+Shift+D` Move the current window to the right.
* `Super+Shift+W` Move the current window to the upper workspace.
* `Super+Shift+S` Move the current window to the lower workspace.

#### Extra Hotkeys
* `Super+Space` Cycle the tiling layout of the current workspace.
* `Super+Escape` Toggle the UI of Material-shell, like a Zen mode.

## Installation
1. Check your GNOME Shell version as we only support **gnome-shell >= 3.34.0**

2. Download the extension. Depending on your distribution, there are several ways to acquire it:

| Distribution | Install via | Command |
| :----------- | :---------- | :------ |
| Arch Linux   | AUR         | `yay -S gnome-shell-extension-material-shell-git` |
| Fedora       | DNF         | `sudo dnf install gnome-shell-extension-material-shell` |
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

## Uninstallation 😢
We're sad to see you go. Before you uninstall, leave us some feedback by [opening an issue](https://github.com/material-shell/material-shell/issues/new/choose) - it will be very helpful in improving Material Shell.

1. Open `gnome-tweaks` and disable the `Material Shell` extension **OR** disable it using 
```bash
gnome-extensions disable material-shell@papyelgringo
```
2. Delete the extension directory.
```bash
rm -rf ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
```
## History
The project is based on my earlier work on [Material Awesome](https://github.com/PapyElGringo/material-awesome).


# Material Shell
A **simple**, **productivity oriented** GNOME Shell replacement that provides an **innovative** and **automated** **mouse and keyboard [workflow](./documentation/material-shell.md#workflow)** which aims to be **faster** and **easier** to use and creates a **great user experience**.

Made by following the **[Material Design guidelines](https://material.io)** - a solid baseline that allows us to provide an **aesthetically pleasing** and **highly accessible** interface.

#### [Read more about the workflow and Material Shell](./documentation/material-shell.md#workflow)

## Demo

![Demo GIF](demo.gif)

### Discord
Get notified about updates and join me on [the Material Shell Discord](https://discord.gg/vBb7D9a)!
#
#### STATUS: BETA (expect bugs!)
#### REQUIRES: gnome-shell >= 3.34.0

## Installation

1. Download the extension. Depending on your distribution, there are several ways to acquire it:

| Distribution | Install via | Command |
| :----------- | :---------- | :------ |
| Arch Linux   | AUR         | `yay -S gnome-shell-extension-material-shell-git` |
| Fedora       | DNF         | `sudo dnf install gnome-shell-extension-material-shell` |
| Others       | source      | `git clone https://github.com/material-shell/material-shell.git ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo` |

(We appreciate package maintainers! If you would like to make a package available for your distro please submit a PR so it can be added here!)

2. Reload GNOME Shell:
  + On X.org: Hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in
3. Open `gnome-tweaks` and activate the `Material Shell` extension **OR** enable it using 
```bash
gnome-extensions enable material-shell@papyelgringo
```

## Workflow Hotkeys
Some hotkeys might already be used by GNOME Shell - please check your keybindings first.
#### Desktop navigation
* `Super+W` Navigate to the upper workspace/category.
* `Super+S` Navigate to the lower workspace/category.
* `Super+A` Focus the window at the left of the current window.
* `Super+D` Focus the window at the right of the current window.

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

## Recommended Additional Configuration
* GTK and GNOME Shell theme: [Plata Theme](https://gitlab.com/tista500/plata-theme)
* Icon theme: [Tela Icon Theme](https://github.com/vinceliuice/Tela-icon-theme)

The project is based on my earlier work on [Material Awesome](https://github.com/PapyElGringo/material-awesome).

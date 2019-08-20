# Material Shell
### A simple yet productivity oriented GNOME shell replacement that provide an innovante and automated mouse/keyboard workflow with the goal to be easier and faster to use and propose a great user experience.

### Made by following the [Material Design guidelines](https://material.io) which help us to propose an aesthetic and accessible interface.

### [Read more about the workflow and Material-shell](./documentation/material-shell.md)

## Demo

![Demo GIF](demo.gif)

### Discord
Get notified about updates and join me at [https://discord.gg/vBb7D9a](https://discord.gg/vBb7D9a)
#
#### STATUS: BETA (expect bugs!)
#### REQUIRES: gnome-shell >=3.32.0

## Installation
1) Clone the project to the gnome-shell extensions folder:
```bash
git clone https://github.com/PapyElGringo/material-shell.git ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
```
2) Reload GNOME Shell:
  + On X.org: Hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in
3) Open `gnome-tweaks` and activate the `Material-shell` extension **OR** enable it using 
```bash
gnome-shell-extension-tool -e material-shell@papyelgringo
```

### Arch Linux
1) You can choose to install using the Arch Linux User-Community Repository (AUR) https://aur.archlinux.org/packages/gnome-shell-extension-material-shell-git/ \
Assuming you're using yay:
```
yay -S gnome-shell-extension-material-shell-git
```
2) Reload GNOME Shell:
  + On X.org: Hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in
3) Open `gnome-tweaks` and activate the `Material-shell` extension **OR** enable it using 
```bash
gnome-shell-extension-tool -e material-shell@papyelgringo
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

## Optional Configuration
* Get [Plata Theme](https://gitlab.com/tista500/plata-theme) as the GTK and shell theme 
* Get [Tela Icon Theme](https://github.com/vinceliuice/Tela-icon-theme) as the icon theme

The project is based on my earlier work on [Material Awesome](https://github.com/PapyElGringo/material-awesome).
## Material Tiling shell replacement for Gnome-shell to simplify and accelerate daily workflow and productivity.

Following my earlier work on [Material Awesome](https://github.com/PapyElGringo/material-awesome). This gnome-shell extension provide a performant opinionated mouse/keyboard workflow and follow the [Material Design guidelines](https://material.io)

### Discord
Get notified on updates and join me at [https://discord.gg/vBb7D9a](https://discord.gg/vBb7D9a)
#
#### STATUS: BETA
#### REQUIRE: Gnome-shell 3.32.x

## Installation
1) Clone the project to the gnome-shell extensions folders
```
git clone https://github.com/PapyElGringo/material-shell.git ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
```
2) Reload gnome-shell by logout and re-login
3) Open `gnome-tweaks` and activate `Material-shell` extension

### If using Ubuntu
The stock Gnome Shell on Ubuntu comes with an extension called Ubuntu Dock, which covers up the Material Shell dock. It can not be disabled through Gnome-Tweaks. To disable it, the following can be done:

```shell
sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com{,.bak}
```

Then restart Gnome Shell (Alt-F2, r <enter>). If you then enable Material Shell dock, it will look as expected.

To restore the original dock after disabling Material Shell, use the following: 

```shell
sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com{.bak,}
```

#
## Workflow Hotkeys
#### Desktop navigation
* `Super+W` Navigate to the upper workspace/category.
* `Super+S` Navigate to the lower workspace/category.
* `Super+A` Focus the window at the left of the current window.
* `Super+D` Focus the window at the right of the current window.

#### Window manipulation
* `Super+Q` Kill the current window focused.
* `Super+[MouseDrag]` Move window around.

#
## Recommendations
* Get [plata-theme](https://gitlab.com/tista500/plata-theme) GTK and Shell theme 
* Get [Tela-icon-theme](https://github.com/vinceliuice/Tela-icon-theme) Icon theme

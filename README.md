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

**Important - do this before enabling `Material-Shell` in Gnome Tweaks**

The stock Gnome Shell on Ubuntu comes with some extensions that can't be disabled through Gnome-Tweaks that interfere with Material Shell. The Ubuntu Dock extension covers up Material Shell's vertical dock, and the Desktop Icons overlay Material Shell's launcher. To disable them, the following can be done:

```shell
$ sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com{,.bak}
$ sudo mv /usr/share/gnome-shell/extensions/desktop-icons@csoriano{,.bak}
```

Then restart Gnome Shell (Alt-F2, r <enter>). You will notice that the desktop icons are gone, and there is no dock. To bring up the dock, open the Gnome Overview with the Super (Windows) key. Then launch Tweaks and enable `Material-Shell`. It should now look as expected.
  
To restore the original dock and icons after disabling Material Shell, use the following: 

```shell
$ sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com{.bak,}
$ sudo mv /usr/share/gnome-shell/extensions/desktop-icons@csoriano{.bak,}
```


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

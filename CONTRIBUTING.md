# Creating Issues
Please make sure you are on the latest version before submitting any issues.
Before clicking submit, run `git pull` and restart GNOME Shell. If the issue persists, please follow these steps:

**Please include:**
+ [ ] Current commit information: output from `git rev-parse --short HEAD`.
  + Please wrap it in backticks (\`)
+ [ ] GNOME log data: output from `journalctl /usr/bin/gnome-shell`
  + Please wrap it in three backticks (\`\`\`)
  + Please include as much output as possible. If necessary, create a Gist and link to it.
+ [ ] Are you using Wayland or X.org?
+ [ ] A detailed explanation of the bug.
  + [ ] What is the expected behavior?
  + [ ] What do you see instead?
  + [ ] Screenshots (if it is a graphical bug)
+ [ ] If applicable, the steps to reproduce the bug.

This information makes it much easier to fix issues.

# Creating PRs
If you're making PRs, you likely know what to include already.

Here are some general guidelines:
+ Follow the code style:
  + Use indents of four spaces in code and two spaces in documentation.
  + Use camel case and do not abbreviate variable names.
+ If you are changing the gschema, please recompile:
```bash
glib-compile-schemas .
```
+ Do not change colors in the Sass. Use the variables at the top to color elements.

You also may benefit from some instructions on compiling the Sass stylesheet:

## Modifying the Stylesheet
The stylesheet is written in [Sass](https://sass-lang.com) so it must be compiled before reloading it.
First, make sure to install the Sass command line tool with `npm`:
```bash
npm install -g sass
```
Once Sass is installed, then:
1) Make changes to the `stylesheet.scss` file as you please.
2) Compile the file, and generate a sourcemap:
```bash
cd ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
sass stylesheet.scss:stylesheet.css --sourcemap
```
3) Reload GNOME Shell:
  + On X.org: hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in

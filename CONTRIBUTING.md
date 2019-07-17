# Creating Issues
**Please include:**
+ [ ] Output from `git show`.
  + Please wrap it in three backticks (\`\`\`)
  + We only need the commit that you are using. Please make sure you are on the latest version.
+ [ ] Output from `journalctl /usr/bin/gnome-shell`
  + Please include as much output as possible. If necessary, create a Gist and link to it.
+ [ ] A detailed explanation of the bug.
  + [ ] What is the expected behavior?
  + [ ] What do you see instead?
  + [ ] Screenshots (if it is a graphical bug)
+ [ ] If applicable, the steps to reproduce the bug.

This information makes it much easier to fix issues.

# Creating PRs
If you're making PRs, you likely know what to include already.

You also may benefit from some instructions on compiling the Sass stylesheet:

## Modifying the Stylesheet
The stylesheet is written in [Sass](https://sass-lang.com) so it must be compiled before reloading it.
First, make sure to install the Sass command line tool with `npm`:
```bash
npm install -g sass
```
If Sass is installed, then:
1) Make changes to the `stylesheet.scss` file as you please.
2) Compile the file, and generate a sourcemap:
```bash
cd ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
sass stylesheet.scss:stylesheet.css --sourcemap
```
3) Reload GNOME Shell:
  + On X.org: hit `Alt+F2` and type the command `r`
  + On Wayland: Log out and back in

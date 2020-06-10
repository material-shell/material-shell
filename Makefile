extension = material-shell@papyelgringo
extension_tool = gnome-shell-extension-tool

.PHONY: schemas sass

build_tasks: schemas sass

schemas: schemas/gschemas.compiled
	glib-compile-schemas schemas/

sass:
	npx node-sass src/styles/dark-theme.scss style-dark-theme.css
	npx node-sass src/styles/light-theme.scss style-light-theme.css
	npx node-sass src/styles/primary-theme.scss style-primary-theme.css


disable:
	$(extension_tool) -d $(extension)

enable:
	$(extension_tool) -e $(extension)

reload:
	$(extension_tool) -r $(extension) 
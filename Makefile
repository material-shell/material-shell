extension = material-shell@papyelgringo
extension_tool = gnome-shell-extension-tool

.PHONY: schemas sass

build_tasks: schemas sass

schemas: schemas/gschemas.compiled
	glib-compile-schemas schemas/

sass:
	sass stylesheet.scss:stylesheet.css --source-map

disable:
	$(extension_tool) -d $(extension)

enable:
	$(extension_tool) -e $(extension)

reload:
	$(extension_tool) -r $(extension)
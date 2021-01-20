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

build_prod: schemas sass
	rm -f dist.zip
	zip -r dist.zip assets
	zip -r dist.zip schemas
	zip -r dist.zip src
	zip dist.zip extension.js
	zip dist.zip prefs.js
	zip dist.zip metadata.json
	zip dist.zip style-dark-theme.css
	zip dist.zip style-light-theme.css
	zip dist.zip style-primary-theme.css

compile:
	-tsc
	comby -config comby.toml -in-place -f .js -directory target/
	./transpile.py
	cp metadata.json target
	cp *.css target
	cp -r schemas target/schemas
	cp -r assets target/assets

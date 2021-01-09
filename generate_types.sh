#!/bin/bash
# The @types directory can be regenerated with this script

# Install all necessary .gir files
echo "Installing gir files..."
sudo apt install libatk1.0-dev:amd64 \
    libclutter-1.0-dev:amd64 \
    libcogl-dev:amd64 \
    libcogl-pango-dev:amd64 \
    libgdk-pixbuf2.0-dev:amd64 \
    libgirepository1.0-dev:amd64 \
    libgtk-3-dev:amd64 \
    libjson-glib-dev:amd64 \
    libpango1.0-dev:amd64


if !command -v ts-for-gir &> /dev/null
then
    echo "Installing the ts-for-gir tool..."
    # Get the ts-for-gir tool
    git clone https://github.com/sammydre/ts-for-gjs
    cd ts-for-gjs
    npm install
    npm link
    cd ..
fi

echo "Deleting the previous types..."
rm -rf "@types"

echo "Generating new .d.ts files from gir files..."
ts-for-gir generate 'Gio*' 'Clutter*' 'Gobject*' 'GLib*' 'Meta*' -e gjs --girDirectories=/usr/share/gir-1.0 --girDirectories=/usr/share/gnome-shell

# The Text_ConstructProps interface does not conform to what typescript thinks is reasonable, so we need to hack it a bit.
echo "Patching .d.ts files"
sed -i -E "s/Text_ConstructProps extends Actor_ConstructProps/Text_ConstructProps extends Omit<Actor_ConstructProps, 'position'>/g" "@types/Gjs/Clutter-1.0.d.ts"

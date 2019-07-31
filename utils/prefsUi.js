const { Gtk } = imports.gi;

/* exported makePage */
var makePage = (title, content) => {
    const tabWindow = new Gtk.ScrolledWindow({ vexpand: true });
    tabWindow.add(content);
    const tabLabel = new Gtk.Label({
        label: title,
        halign: Gtk.Align.START,
        use_markup: false
    });
    return [tabWindow, tabLabel];
};
/* exported makeItemRow */
var makeItemRow = (name, description, item) => {
    const nameLabel = new Gtk.Label({ xalign: 0 });
    nameLabel.set_markup(`<span size="medium">${name}</span>`);

    const descriptionLabel = new Gtk.Label({ xalign: 0 });
    descriptionLabel.set_markup(`<span size="small">${description}</span>`);

    const labelsVBox = new Gtk.VBox();
    labelsVBox.pack_start(nameLabel, false, false, 0);
    labelsVBox.pack_start(descriptionLabel, false, false, 0);

    const rowHBox = new Gtk.HBox();
    rowHBox.pack_start(labelsVBox, true, true, 10);
    rowHBox.pack_start(item, false, false, 0);

    const listRow = new Gtk.ListBoxRow();
    listRow.add(rowHBox);

    return listRow;
};

/* exported makeItemList */
var makeItemList = rows => {
    const listBox = new Gtk.ListBox({
        valign: Gtk.Align.START
    });
    const listWrapper = new Gtk.VBox({
        border_width: 10
    });
    rows.forEach(row => listBox.add(row));
    listWrapper.add(listBox);
    return listWrapper;
};

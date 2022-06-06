import { Widget } from "st";

/** Sets whether the widget has the given style class */
export function set_style_class(widget: Widget, style_class: string, enabled: boolean) {
    if (enabled) {
        if (!widget.has_style_class_name(style_class)) {
            widget.add_style_class_name(style_class);
        }
    } else {
        if (widget.has_style_class_name(style_class)) {
            widget.remove_style_class_name(style_class);
        }
    }
}
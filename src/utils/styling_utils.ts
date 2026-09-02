import Clutter from 'gi://Clutter';
import St from 'gi://St';

/** Drops the cached theme node of every St widget in the subtree.
 *
 * st_widget_style_changed cascades to descendants on its own, so the walk only
 * has to reach the first St.Widget in each branch — MsWorkspaceActor, its
 * tileableContainer and MsWindow are plain Clutter actors, while HorizontalPanel
 * and MsWindowContent are not.
 */
export function invalidate_style_recursively(actor: Clutter.Actor) {
    if (actor instanceof St.Widget) {
        actor.style_changed();
        return;
    }
    for (const child of actor.get_children()) {
        invalidate_style_recursively(child);
    }
}

/** Sets whether the widget has the given style class */
export function set_style_class(
    widget: St.Widget,
    style_class: string,
    enabled: boolean
) {
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

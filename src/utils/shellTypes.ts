/** Gnome libs imports */
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

/**
 * A monitor as `js/ui/layout.js` models it.
 *
 * The shell keeps the class private, so name the type through the layout
 * manager rather than importing it.
 */
export type Monitor = NonNullable<
    (typeof Main.layoutManager)['primaryMonitor']
>;

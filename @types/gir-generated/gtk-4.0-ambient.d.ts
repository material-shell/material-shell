declare module 'gi://Gtk?version=4.0' {
    const Gtk40: typeof import('./gtk-4.0.js').default;
    export default Gtk40;
}

declare module 'gi://Gtk' {
    const Gtk40: typeof import('./gtk-4.0.js').default;
    export default Gtk40;
}

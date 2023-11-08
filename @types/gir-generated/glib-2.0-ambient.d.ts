declare module 'gi://GLib?version=2.0' {
    const GLib20: typeof import('./glib-2.0.js').default;
    export default GLib20;
}

declare module 'gi://GLib' {
    const GLib20: typeof import('./glib-2.0.js').default;
    export default GLib20;
}

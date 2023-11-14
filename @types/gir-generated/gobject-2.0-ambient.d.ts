declare module 'gi://GObject?version=2.0' {
    const GObject20: typeof import('./gobject-2.0.js').default;
    export default GObject20;
}

declare module 'gi://GObject' {
    const GObject20: typeof import('./gobject-2.0.js').default;
    export default GObject20;
}

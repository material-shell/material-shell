declare module 'gi://Gio?version=2.0' {
    const Gio20: typeof import('./gio-2.0.js').default;
    export default Gio20;
}

declare module 'gi://Gio' {
    const Gio20: typeof import('./gio-2.0.js').default;
    export default Gio20;
}

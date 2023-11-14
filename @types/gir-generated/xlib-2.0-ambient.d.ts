declare module 'gi://xlib?version=2.0' {
    const Xlib20: typeof import('./xlib-2.0.js').default;
    export default Xlib20;
}

declare module 'gi://xlib' {
    const Xlib20: typeof import('./xlib-2.0.js').default;
    export default Xlib20;
}

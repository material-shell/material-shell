declare module 'gi://Adw?version=1' {
    const Adw1: typeof import('./adw-1.js').default;
    export default Adw1;
}

declare module 'gi://Adw' {
    const Adw1: typeof import('./adw-1.js').default;
    export default Adw1;
}

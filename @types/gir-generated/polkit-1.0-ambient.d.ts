declare module 'gi://Polkit?version=1.0' {
    const Polkit10: typeof import('./polkit-1.0.js').default;
    export default Polkit10;
}

declare module 'gi://Polkit' {
    const Polkit10: typeof import('./polkit-1.0.js').default;
    export default Polkit10;
}

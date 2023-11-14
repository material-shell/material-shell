declare module 'gi://GL?version=1.0' {
    const GL10: typeof import('./gl-1.0.js').default;
    export default GL10;
}

declare module 'gi://GL' {
    const GL10: typeof import('./gl-1.0.js').default;
    export default GL10;
}

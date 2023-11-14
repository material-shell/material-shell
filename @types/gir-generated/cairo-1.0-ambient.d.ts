declare module 'gi://cairo?version=1.0' {
    const Cairo10: typeof import('./cairo-1.0.js').default;
    export default Cairo10;
}

declare module 'gi://cairo' {
    const Cairo10: typeof import('./cairo-1.0.js').default;
    export default Cairo10;
}

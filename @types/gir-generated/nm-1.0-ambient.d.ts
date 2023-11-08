declare module 'gi://NM?version=1.0' {
    const NM10: typeof import('./nm-1.0.js').default;
    export default NM10;
}

declare module 'gi://NM' {
    const NM10: typeof import('./nm-1.0.js').default;
    export default NM10;
}

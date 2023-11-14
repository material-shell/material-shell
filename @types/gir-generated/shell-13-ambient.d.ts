declare module 'gi://Shell?version=13' {
    const Shell13: typeof import('./shell-13.js').default;
    export default Shell13;
}

declare module 'gi://Shell' {
    const Shell13: typeof import('./shell-13.js').default;
    export default Shell13;
}

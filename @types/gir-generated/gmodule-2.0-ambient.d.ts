declare module 'gi://GModule?version=2.0' {
    const GModule20: typeof import('./gmodule-2.0.js').default;
    export default GModule20;
}

declare module 'gi://GModule' {
    const GModule20: typeof import('./gmodule-2.0.js').default;
    export default GModule20;
}

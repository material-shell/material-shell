declare module 'gi://Json?version=1.0' {
    const Json10: typeof import('./json-1.0.js').default;
    export default Json10;
}

declare module 'gi://Json' {
    const Json10: typeof import('./json-1.0.js').default;
    export default Json10;
}

declare module 'gi://Gck?version=2' {
    const Gck2: typeof import('./gck-2.js').default;
    export default Gck2;
}

declare module 'gi://Gck' {
    const Gck2: typeof import('./gck-2.js').default;
    export default Gck2;
}

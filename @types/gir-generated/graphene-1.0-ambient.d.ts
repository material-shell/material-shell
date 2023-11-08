declare module 'gi://Graphene?version=1.0' {
    const Graphene10: typeof import('./graphene-1.0.js').default;
    export default Graphene10;
}

declare module 'gi://Graphene' {
    const Graphene10: typeof import('./graphene-1.0.js').default;
    export default Graphene10;
}

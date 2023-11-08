type Graphene10 = typeof import('./graphene-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Graphene: Graphene10;
    }
}

export default GjsGiImports;

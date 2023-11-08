type Gsk40 = typeof import('./gsk-4.0.js').default;

declare global {
    export interface GjsGiImports {
        Gsk: Gsk40;
    }
}

export default GjsGiImports;

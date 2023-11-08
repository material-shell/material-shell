type Gvc10 = typeof import('./gvc-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Gvc: Gvc10;
    }
}

export default GjsGiImports;

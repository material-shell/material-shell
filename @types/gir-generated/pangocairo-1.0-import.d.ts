type PangoCairo10 = typeof import('./pangocairo-1.0.js').default;

declare global {
    export interface GjsGiImports {
        PangoCairo: PangoCairo10;
    }
}

export default GjsGiImports;

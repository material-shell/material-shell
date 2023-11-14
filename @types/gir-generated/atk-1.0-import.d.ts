type Atk10 = typeof import('./atk-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Atk: Atk10;
    }
}

export default GjsGiImports;

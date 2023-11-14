type Gcr4 = typeof import('./gcr-4.js').default;

declare global {
    export interface GjsGiImports {
        Gcr: Gcr4;
    }
}

export default GjsGiImports;

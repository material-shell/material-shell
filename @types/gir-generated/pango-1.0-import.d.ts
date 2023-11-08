type Pango10 = typeof import('./pango-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Pango: Pango10;
    }
}

export default GjsGiImports;

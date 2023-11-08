type GModule20 = typeof import('./gmodule-2.0.js').default;

declare global {
    export interface GjsGiImports {
        GModule: GModule20;
    }
}

export default GjsGiImports;

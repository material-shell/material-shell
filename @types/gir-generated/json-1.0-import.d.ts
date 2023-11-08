type Json10 = typeof import('./json-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Json: Json10;
    }
}

export default GjsGiImports;

type Cairo10 = typeof import('./cairo-1.0.js').default;

declare global {
    export interface GjsGiImports {
        cairo: Cairo10;
    }
}

export default GjsGiImports;

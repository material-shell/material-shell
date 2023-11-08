type CoglPango13 = typeof import('./coglpango-13.js').default;

declare global {
    export interface GjsGiImports {
        CoglPango: CoglPango13;
    }
}

export default GjsGiImports;

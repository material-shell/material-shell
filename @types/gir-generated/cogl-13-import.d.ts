type Cogl13 = typeof import('./cogl-13.js').default;

declare global {
    export interface GjsGiImports {
        Cogl: Cogl13;
    }
}

export default GjsGiImports;

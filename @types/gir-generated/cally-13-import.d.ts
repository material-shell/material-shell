type Cally13 = typeof import('./cally-13.js').default;

declare global {
    export interface GjsGiImports {
        Cally: Cally13;
    }
}

export default GjsGiImports;

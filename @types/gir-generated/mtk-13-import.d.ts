type Mtk13 = typeof import('./mtk-13.js').default;

declare global {
    export interface GjsGiImports {
        Mtk: Mtk13;
    }
}

export default GjsGiImports;

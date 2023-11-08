type Freetype220 = typeof import('./freetype2-2.0.js').default;

declare global {
    export interface GjsGiImports {
        freetype2: Freetype220;
    }
}

export default GjsGiImports;

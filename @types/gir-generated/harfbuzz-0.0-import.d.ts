type HarfBuzz00 = typeof import('./harfbuzz-0.0.js').default;

declare global {
    export interface GjsGiImports {
        HarfBuzz: HarfBuzz00;
    }
}

export default GjsGiImports;

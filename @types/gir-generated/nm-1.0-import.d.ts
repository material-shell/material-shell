type NM10 = typeof import('./nm-1.0.js').default;

declare global {
    export interface GjsGiImports {
        NM: NM10;
    }
}

export default GjsGiImports;

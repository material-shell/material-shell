type Gio20 = typeof import('./gio-2.0.js').default;

declare global {
    export interface GjsGiImports {
        Gio: Gio20;
    }
}

export default GjsGiImports;

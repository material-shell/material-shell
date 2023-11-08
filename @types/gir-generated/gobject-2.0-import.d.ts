type GObject20 = typeof import('./gobject-2.0.js').default;

declare global {
    export interface GjsGiImports {
        GObject: GObject20;
    }
}

export default GjsGiImports;

type GdkPixbuf20 = typeof import('./gdkpixbuf-2.0.js').default;

declare global {
    export interface GjsGiImports {
        GdkPixbuf: GdkPixbuf20;
    }
}

export default GjsGiImports;

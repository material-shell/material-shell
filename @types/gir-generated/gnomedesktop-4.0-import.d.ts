type GnomeDesktop40 = typeof import('./gnomedesktop-4.0.js').default;

declare global {
    export interface GjsGiImports {
        GnomeDesktop: GnomeDesktop40;
    }
}

export default GjsGiImports;

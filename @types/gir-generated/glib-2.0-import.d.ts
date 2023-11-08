type GLib20 = typeof import('./glib-2.0.js').default;

declare global {
    export interface GjsGiImports {
        GLib: GLib20;
    }
}

export default GjsGiImports;

type Gtk40 = typeof import('./gtk-4.0.js').default;

declare global {
    export interface GjsGiImports {
        Gtk: Gtk40;
    }
}

export default GjsGiImports;

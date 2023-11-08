type Gdk40 = typeof import('./gdk-4.0.js').default;

declare global {
    export interface GjsGiImports {
        Gdk: Gdk40;
    }
}

export default GjsGiImports;

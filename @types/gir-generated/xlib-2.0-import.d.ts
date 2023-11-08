type Xlib20 = typeof import('./xlib-2.0.js').default;

declare global {
    export interface GjsGiImports {
        xlib: Xlib20;
    }
}

export default GjsGiImports;

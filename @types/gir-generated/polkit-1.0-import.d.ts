type Polkit10 = typeof import('./polkit-1.0.js').default;

declare global {
    export interface GjsGiImports {
        Polkit: Polkit10;
    }
}

export default GjsGiImports;

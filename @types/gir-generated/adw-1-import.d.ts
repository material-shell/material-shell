type Adw1 = typeof import('./adw-1.js').default;

declare global {
    export interface GjsGiImports {
        Adw: Adw1;
    }
}

export default GjsGiImports;

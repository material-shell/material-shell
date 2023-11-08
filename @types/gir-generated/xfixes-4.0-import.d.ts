type Xfixes40 = typeof import('./xfixes-4.0.js').default;

declare global {
    export interface GjsGiImports {
        xfixes: Xfixes40;
    }
}

export default GjsGiImports;

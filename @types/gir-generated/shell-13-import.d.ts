type Shell13 = typeof import('./shell-13.js').default;

declare global {
    export interface GjsGiImports {
        Shell: Shell13;
    }
}

export default GjsGiImports;

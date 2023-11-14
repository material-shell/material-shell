type GL10 = typeof import('./gl-1.0.js').default;

declare global {
    export interface GjsGiImports {
        GL: GL10;
    }
}

export default GjsGiImports;

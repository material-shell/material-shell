type St13 = typeof import('./st-13.js').default;

declare global {
    export interface GjsGiImports {
        St: St13;
    }
}

export default GjsGiImports;

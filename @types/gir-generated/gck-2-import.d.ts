type Gck2 = typeof import('./gck-2.js').default;

declare global {
    export interface GjsGiImports {
        Gck: Gck2;
    }
}

export default GjsGiImports;

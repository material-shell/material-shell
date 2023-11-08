type Meta13 = typeof import('./meta-13.js').default;

declare global {
    export interface GjsGiImports {
        Meta: Meta13;
    }
}

export default GjsGiImports;

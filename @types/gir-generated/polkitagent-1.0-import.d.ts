type PolkitAgent10 = typeof import('./polkitagent-1.0.js').default;

declare global {
    export interface GjsGiImports {
        PolkitAgent: PolkitAgent10;
    }
}

export default GjsGiImports;

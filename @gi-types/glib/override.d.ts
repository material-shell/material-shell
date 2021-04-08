export * from "./index";

// GJS OVERRIDES

declare global {
    interface Error {
        matches?: (error: any, code?: number) => boolean;
    }
}


export function isNonNull<T>(x: T | null): x is T {
    return x !== null;
}

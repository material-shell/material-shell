/** Groups the given items into a map by their keys */
export function groupBy<T, K>(items: T[], key: (item: T) => K): Map<K, T[]> {
    const map = new Map<K, T[]>();
    for (const item of items) {
        const k = key(item);
        let ls = map.get(k);
        if (ls === undefined) {
            ls = [];
            map.set(k, ls);
        }
        ls.push(item);
    }
    return map;
}

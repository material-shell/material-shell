/** Given a list `lhs` which has been changed into `rhs`, returns which items have been added to `rhs` and which have been removed.
 * The order of items does not matter.
 *
 * The result is unspecified if any list contains duplicate items.
 */
export function diffLists<T>(lhs: T[], rhs: T[]): { added: T[]; removed: T[] } {
    return {
        added: rhs.filter((x) => !lhs.includes(x)),
        removed: lhs.filter((x) => !rhs.includes(x)),
    };
}

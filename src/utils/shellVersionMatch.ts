import { logAssert } from './assert';
const { PACKAGE_VERSION } = imports.misc.config;

/// List of all (relevant) known gnome versions.
/// The versions should be ordered from oldest to newest.
/// It doesn't need to contain every version, only those that we want to use for compatibility checks (e.g. using `IntroducedInGnome<V>`).
type VERSIONS = [
    'ancient',
    '36.0',
    '38.0',
    '39.0',
    '40.0',
    '41.0',
    '41.5',
    '42.0'
];

/// Equivalent to `A.indexOf(T)` but implemented in the type system.
///
/// This works by essentially implementing numbers as arrays of a given size, and using those
/// to check item by item in a recursive way.
type FindIndex<
    A extends string[],
    T extends string,
    I extends [...unknown[]] = []
> = I['length'] extends A['length']
    ? -1
    : T extends A[I['length']]
    ? I['length']
    : FindIndex<A, T, [...I, unknown]>;

/// Returns a tuple type `[T, T, T, ...]` which has `N` elements.
type Tuple<
    T,
    N extends number,
    CURRENT extends unknown[] = []
> = CURRENT['length'] extends N ? CURRENT : Tuple<T, N, [T, ...CURRENT]>;

/// Returns a tuple type `[boolean, boolean, ..., boolean]` with the same length as the `VERSIONS` array
/// and which has a single item set to `true` which corresponds to the given version.
///
/// ```
/// Selector<"38"> = [boolean, true, boolean, boolean, ...]`
/// ```
type Selector<
    VERSION extends VERSIONS[number],
    B extends [...boolean[]] = []
> = VERSIONS['length'] extends B['length']
    ? B
    : VERSION extends VERSIONS[B['length']]
    ? Selector<VERSION, [...B, true]>
    : Selector<VERSION, [...B, boolean]>;

/// Appends `T` to the array until it has the same length as the `VERSIONS` array.
type FillRemaining<
    I extends [...boolean[]],
    T extends boolean
> = I['length'] extends VERSIONS['length'] ? I : FillRemaining<[...I, T], T>;

/// Creates a tuple type `[LHS, LHS, LHS, ..., RHS, RHS, RHS]` with the same length as `VERSIONS` such that
/// the first index which is `RHS` is `PARTITION_INDEX`.
type PartitionedTuple<
    PARTITION_INDEX extends number,
    LHS extends boolean,
    RHS extends boolean,
    CURRENT extends [...boolean[]] = []
> = CURRENT['length'] extends VERSIONS['length']
    ? CURRENT
    : PARTITION_INDEX extends CURRENT['length']
    ? FillRemaining<CURRENT, RHS>
    : PartitionedTuple<PARTITION_INDEX, LHS, RHS, [...CURRENT, LHS]>;

export type NeverRemoved = 'never';

/// Use this to indicate that a type was removed in a specific version of gnome
/// Needs to be used together with `IntroducedInGnome`.
/// You can use `RemovedInGnome<"never">` if the type is used in the latest version of gnome.
export type RemovedInGnome<V extends VERSIONS[number] | NeverRemoved> = {
    gnome_version: {
        gt: PartitionedTuple<FindIndex<VERSIONS, V>, true, false>;
    };
};

/// Use this to indicate that a type was introduced in a specific version of gnome
/// Needs to be used together with `RemovedInGnome`
export type IntroducedInGnome<V extends VERSIONS[number] | never> = {
    gnome_version: {
        lt: PartitionedTuple<FindIndex<VERSIONS, V>, false, true>;
    };
};

/// Parses a version like "30.20.2" to [30,20,2]
///
/// 'alpha', 'beta' and 'rc' components will be parsed to negative values
/// which ensures that sorting works correctly.
/// E.g. "43.alpha" will be parsed to [43,-3]
function parseVersion(s: string): number[] {
    const components = s.split('.').map((x) => {
        if (x === 'alpha') return -3;
        if (x === 'beta') return -2;
        if (x === 'rc') return -1;
        return Number(x);
    });
    if (!components.every((x) => isFinite(x))) {
        throw new Error(`Could not parse version number: ${s}`);
    }
    return components;
}

/// Compares to versions, returns -1 if lhs < rhs, 1 if lhs > rhs and 0 if lhs == rhs
/// Lhs and rhs may be of different lengths, missing components will be assumed to be zero.
function compareVersions(lhs: number[], rhs: number[]) {
    for (let i = 0; i < Math.max(lhs.length, rhs.length); i++) {
        const a = i < lhs.length ? lhs[i] : 0;
        const b = i < rhs.length ? rhs[i] : 0;
        if (a != b) {
            return a < b ? -1 : 1;
        }
    }
    return 0;
}

const gnomeVersionNumber = parseVersion(PACKAGE_VERSION);

/* exported ShellVersionMatch*/
export function ShellVersionMatch(version: string) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
}

type TypeWithGnomeVersion = {
    gnome_version: {
        /// gt[i] will be true if it's okay that the gnome version is greater than or equal to VERSIONS[i]
        gt: Tuple<boolean, VERSIONS['length']>;
        /// lt[i] will be true if it's okay that the gnome version is less than or equal to VERSIONS[i]
        lt: Tuple<boolean, VERSIONS['length']>;
    };
};

/// Checks if the gnome version is greater or equal to the specified version, and narrows a given type to that version.
///
/// ```
/// // This function takes a value which differs depending on the gnome version.
/// function(v: { new_value: number } & IntroducedInGnome<"40.0"> & RemovedInGnome<"never"> | { old_value: number } & IntroducedInGnome<"ancient"> & RemovedInGnome<"40.0">) {
///    if(gnomeVersionGreaterOrEqualTo(v, "40.0")) {
///        // You can use v.new_value here
///    } else {
///        // You can use v.old_value here
///    }
/// }
/// ```
///
/// The type-checking is not perfect. For more elaborate checks when multiple greater than and less than checks need to be done, the typechecking can be more
/// lenient than what is strictly correct. So double-check that your version comparisons make sense. For basic checks it should be fine, though.
///
/// Internally the narrowing is implemented in the type system by for example narrowing `gnome_version.gt[i]` to true if we have checked that the gnome version is indeed greater or equal to `VERSIONS[i]`.
export function gnomeVersionGreaterOrEqualTo<V extends VERSIONS[number]>(
    vs: TypeWithGnomeVersion,
    version: V
): vs is {
    gnome_version: { gt: Selector<V>; lt: Tuple<boolean, VERSIONS['length']> };
} {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) >= 0;
}

/// Checks if the gnome version is less than or equal to the specified version, and narrows a given type to that version.
///
/// See `gnomeVersionGreaterOrEqualTo`
export function gnomeVersionLessOrEqualTo<V extends VERSIONS[number]>(
    vs: TypeWithGnomeVersion,
    version: V
): vs is {
    gnome_version: { gt: Tuple<boolean, VERSIONS['length']>; lt: Selector<V> };
} {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) <= 0;
}

/// Checks if the gnome version is exactly equal to the specified version, and narrows a given type to that version.
///
/// See `gnomeVersionGreaterOrEqualTo`
export function gnomeVersionEqualTo<V extends VERSIONS[number]>(
    vs: TypeWithGnomeVersion,
    version: V
): vs is { gnome_version: { gt: Selector<V>; lt: Selector<V> } } {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) == 0;
}

logAssert(
    compareVersions(parseVersion('3.0'), parseVersion('3.1')) === -1,
    'Failed tests'
);
logAssert(
    compareVersions(parseVersion('30'), parseVersion('3.1')) === 1,
    'Failed tests'
);
logAssert(
    compareVersions(parseVersion('3.20.32'), parseVersion('3.20.32')) === 0,
    'Failed tests'
);
logAssert(
    compareVersions(parseVersion('3.20'), parseVersion('3.20.0')) === 0,
    'Failed tests'
);
logAssert(
    compareVersions(parseVersion('42.3'), parseVersion('41.5')) === 1,
    'Failed tests'
);

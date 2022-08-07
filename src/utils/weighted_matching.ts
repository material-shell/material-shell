import { assert } from './assert';

/** Weighted matching.
 * Matches N items on the "left" side with M items on the "right" side such that every item on the "left" side is part of exactly one match, and the total cost is minimized.
 *
 * Takes an array `costs[N][M]` where costs[i][j] is the cost for assigning item i on the left hand side with item j on the right hand side.
 *
 * Returns the minimum total cost for a valid assignment as well as the assignment indices.
 * In the return value, `assignments[i] = j` indicates that item `i` on the lhs was assigned to item `j` on the rhs.
 *
 * Requires N <= M since otherwise not all items on the lhs can be matched.
 *
 * This implements the Hungarian Algorithm.
 * Source: KACTL: https://github.com/kth-competitive-programming/kactl/blob/main/content/graph/WeightedMatching.h
 *
 * See https://en.wikipedia.org/wiki/Assignment_problem
 * See https://en.wikipedia.org/wiki/Hungarian_algorithm
 */
export function weighted_matching(costs: number[][]): {
    cost: number;
    assignments: Int32Array;
} {try{
    const INT_MAX = 2147483647;

    if (costs.length == 0) return { cost: 0, assignments: new Int32Array() };
    const n = costs.length + 1;
    const m = costs[0].length + 1;
    if (n > m) {
        throw new Error(
            'Expected n <= m, otherwise not all items on the left hand side can be assigned'
        );
    }
    const u = new Int32Array(n);
    const v = new Int32Array(m);
    const p = new Int32Array(m);
    const ans = new Int32Array(n - 1);

    // Temporary arrays per loop
    const dist = new Int32Array(m);
    const pre = new Int32Array(m);
    const done = new Int32Array(m + 1); // Emulates a boolean array

    for (let i = 1; i < n; i++) {
        p[0] = i;
        let j0 = 0; // add "dummy" worker 0
        dist.fill(INT_MAX);
        pre.fill(-1);
        done.fill(0);
        do {
            // dijkstra
            done[j0] = 1;
            let i0 = p[j0],
                j1 = 0,
                delta = INT_MAX;
            for (let j = 1; j < m; j++) {
                if (done[j] === 0) {
                    const cur = costs[i0 - 1][j - 1] - u[i0] - v[j];
                    if (cur < dist[j]) {
                        dist[j] = cur;
                        pre[j] = j0;
                    }
                    if (dist[j] < delta) {
                        delta = dist[j];
                        j1 = j;
                    }
                }
            }
            for (let j = 0; j < m; j++) {
                if (done[j] === 1) {
                    u[p[j]] += delta;
                    v[j] -= delta;
                } else {
                    dist[j] -= delta;
                }
            }
            j0 = j1;
        } while (p[j0] !== 0);
        while (j0 !== 0) {
            // update alternating path
            const j1 = pre[j0];
            p[j0] = p[j1];
            j0 = j1;
        }
    }
    for (let j = 1; j < m; j++) {
        if (p[j] !== 0) {
            ans[p[j] - 1] = j - 1;
        }
    }
    return { cost: -v[0], assignments: ans }; // min cost
    } finally {}
}

export function test_hungarian() {
    assert(
        weighted_matching([
            [10, 20, 30],
            [20, 30, 30],
            [20, 20, 5],
        ]).cost ==
            10 + 30 + 5,
        ''
    );
    assert(
        weighted_matching([
            [10, 20, 10000],
            [1, 2, 10000],
            [5, 3, 10000],
        ]).cost ==
            10000 + 1 + 3,
        ''
    );
}

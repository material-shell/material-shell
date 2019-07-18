/* exported range */
var range = to =>
    // Returns a list containing all integers from 0 to `to`
    Array(to)
        .fill()
        .map((_, i) => i);

/**
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

/*
  Analysis:
  This an intersting problem.In fact, it's an easy math question.
  Suppose that minMoves is x, the problem satisfys a equation: x(n-1) = n*m - sum
  m is the value that all array elements equals finally, actually, m = min + x.
  So, x = sum - n*min.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let n = nums.length;
    // In es5, you can get minimum by this way: Math.min.apply(null, arr)
    let min = Math.min(...nums);
    let sum = nums.reduce((a, b) => {
        return a + b;
    });
    return sum - n * min;
};

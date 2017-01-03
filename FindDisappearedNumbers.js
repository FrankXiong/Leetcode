/**
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

// Solution A
// Time Limit Exceed!
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var output = [];
    for(var i = 1; i <= nums.length; i++) {
        if(nums.indexOf(i) === -1) {
            output.push(i);
        }
    }
    return output;
};

// Solution B
// Accpted!
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var output = [], n = nums.length;
    for(var i = 0; i < n; i++) {
        while(nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
            // swap nums[i] and nums[nums[i] - 1]
            // it can make sure that the index of nums[i] equals to nums[i]
            var temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
    for(var j = 0; j < n; j++) {
        if(nums[j] !== j + 1) {
            output.push(j + 1);
        }
    }
    return output;
};

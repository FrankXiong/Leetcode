/**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let n = nums.length;
	for (let i = 0; i < n - 1; i++) {
		if (nums[i] === 0) {
			for (let j = i + 1; j < n; j++) {
				if (nums[j] !== 0) {
					swap(nums, i, j);
					break;
				}
			}
		}
	}
};

var swap = function(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

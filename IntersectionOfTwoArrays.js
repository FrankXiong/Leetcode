/**
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = [];
  for(let i = 0;i < nums1.length; i++) {
      let value = nums1[i];
      if(nums2.indexOf(value) !== -1 && result.indexOf(value) === -1) {
          result.push(value);
      }
  }
  return result;
};

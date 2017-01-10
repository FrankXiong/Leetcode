/**
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/


// Recursive
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root === null) {
        return 0;
    }
    let result = 0;
    if(root.left !== null){
        if(!root.left.left && !root.left.right){
            result += root.left.val;
        } else {
            result += sumOfLeftLeaves(root.left);
        }
    }
    if(root.right !== null) {
        result += sumOfLeftLeaves(root.right);
    }
    return result;
};


// Iterative
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root === null) {
        return 0;
    }
    let result = 0, stack = [], node = null;
    stack.push(root);
    while(stack.length) {
        node = new TreeNode(stack.pop());
        if(node.left !== null) {
            if(node.left.left === null && node.left.right === null) {
                result += node.left.val;
            } else {
                stack.push(node.left);
            }
        }
        if(node.right !== null) {
            if(node.right.left !== null || node.right.right !== null) {
                stack.push(node.right);
            }
        }
    }
    return result;
};

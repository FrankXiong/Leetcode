/**
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // Solution A: Recursive
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    }
    if(p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

// Solution B: Non-recursive
var isSameTree = function(p, q) {
    let stack = [{p, q}];
    while(stack.length > 0) {
        let o = stack.pop();
        let a = o.p, b = o.q;
        if(!a && !b) continue;
        if(!a || !b) return false;
        if(a.val !== b.val) {
            return false;
        } else {
            stack.push({p:a.left, q:b.left});
            stack.push({p:a.right, q:b.right});
        }
    }
    return true;
};

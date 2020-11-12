/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

// 递归的实现，分析：到达跟节点的时候，检查这个节点要求的 sum 值是不是节点的当前值
// 时间复杂度：O(N)，其中 N 是树的节点数，对每个节点访问一次。
// 空间复杂度：O(H)，其中 H 是树的高度。
// 空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log N)。

var hasPathSum = function(root, sum) {
  if (!root) return false
  if (!root.left && !root.right) {
    return sum === root.val
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
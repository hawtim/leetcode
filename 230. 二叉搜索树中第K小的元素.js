/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 中序遍历后即是排序后的顺序
var kthSmallest = function(root, k) {
  var sorted = inOrder(root, [])
  // if (k >= 1 && k <= sorted.length) 
  return sorted[k - 1]
  // return null
};

function inOrder(node, array) {
  if (node) {
    inOrder(node.left, array)
    array.push(node.val)
    inOrder(node.right, array)
    return array
  }
}
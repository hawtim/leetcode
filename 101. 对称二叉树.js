/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 两个根结点相等
// 左子树的右节点和右子树的左节点相同。
// 右子树的左节点和左子树的右节点相同。

var isSymmetric = function(root) {
  function isSymmetricTree(node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false
    if (node1.val !== node2.val) return false
    return isSymmetricTree(node1.left, node2.right) && isSymmetricTree(node1.right, node2.left)
  }
  return isSymmetricTree(root, root)
};
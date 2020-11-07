
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 递归思路
// 前序遍历：根节点 + 左子树前序遍历 + 右子树前序遍历
// 中序遍历：左子树中序遍历 + 根节点 + 右字数中序遍历
// 后序遍历：左子树后序遍历 + 右子树后序遍历 + 根节点
// 关键条件在 preorder.length === 1 的时候
// 生成节点并挂载到 node.left / node.right
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  var value = preorder[0]
  if (preorder.length === 1) return new TreeNode(value)
  var index = inorder.indexOf(value)
  // var inLeft = inorder.slice(0, index)
  // var inRight = inorder.slice(index + 1)
  // var preLeft = preorder.slice(1, index + 1)
  // var preRight = preorder.slice(index + 1)
  var node = new TreeNode(value)
  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return node
};
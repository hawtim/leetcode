/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (70.75%)
 * Likes:    474
 * Dislikes: 0
 * Total Accepted:    160.9K
 * Total Submissions: 219K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
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
 * @return {number[]}
 */
// var postorderTraversal = function(root, array = []) {
//   if (root) {
//     postorderTraversal(root.left, array)
//     postorderTraversal(root.right, array)
//     array.push(root.val)
//   }
//   return array
// };
// 参考这篇解说：https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/er-cha-shu-de-hou-xu-bian-li-by-leetcode-solution/
var postorderTraversal = function(root) {
  var res = []
  if (!root) return res
  var stack = []
  // 引入一个新的变量
  var prev = null
  while (root || stack.length) {
    // 还是先遍历入栈左节点
    while (root) {
      stack.push(root)
      root = root.left
    }
    // 取出左节点，先检查右节点
    root = stack.pop()
    // 如果左节点没有右子节点 或者
    // 刚访问过右子节点（这是个终止条件，在右子树最后往上回一层层到跟节点的时候发挥作用）
    if (!root.right || root.right == prev) {
      // 打印当前值
      res.push(root.val)
      prev = root
      root = null
    } else { // 有右子树并且没有访问
      // 遍历右子树
      stack.push(root)
      root = root.right
    }
  }
  return res
}

// @lc code=end


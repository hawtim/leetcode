/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 *
 * https://leetcode-cn.com/problems/house-robber-iii/description/
 *
 * algorithms
 * Medium (56.42%)
 * Likes:    632
 * Dislikes: 0
 * Total Accepted:    74.2K
 * Total Submissions: 122.4K
 * Testcase Example:  '[3,2,3,null,3,null,1]'
 *
 * 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
 * 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 * 
 * 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3,null,3,null,1]
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  2   3
 * ⁠   \   \ 
 * ⁠    3   1
 * 
 * 输出: 7 
 * 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
 * 
 * 示例 2:
 * 
 * 输入: [3,4,5,1,3,null,1]
 * 
 * 3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \   \ 
 * ⁠1   3   1
 * 
 * 输出: 9
 * 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
 * 
 * 
 */

// @lc code=start
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
// 方案一：递归加记忆化
// 分两种情况，打劫跟节点，不打劫跟节点，取两种情况的最大
var rob = function(root) {
  // 因为数组的键无法是对象，所以使用 map 来保存索引
  const memory = new Map()
  const helper = function(root) {
    if (!root) return 0
    // 记忆的关键
    if (memory.has(root)) {
      return memory.get(root)
    }
    // 打劫根节点
    let robIncRoot = root.val
    if (root.left) {
      robIncRoot += helper(root.left.left) + helper(root.left.right)
    }
    if (root.right) {
      robIncRoot += helper(root.right.left) + helper(root.right.right)
    }
    // 不打劫跟节点
    let robExcRoot = helper(root.left) + helper(root.right)
    const res =  Math.max(robIncRoot, robExcRoot)
    memory.set(root, res)
    return res
  }
  return helper(root)
}

// 方案二：树形 DP
var rob = function(root) {
  var dp = new Map()
  // 辅助函数
  const helper = function (root) {
    // 遍历到 null 节点，两种状态下都是 0
    if (!root) return [0, 0]
    // 递归调用左右子树
    const left = helper(root.left)
    const right = helper(root.right)
    // 没遍历过的当前节点
    if (!dp.has(root)) {
      // 在map中添加当前节点，和初始的 res 数组
      dp.set(root, [0, 0])
    }
    // 获取当前节点对应的res数组
    const res = dp.get(root)
    // 将当前子树的两个状态记录到 map 中
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    res[1] = root.val + left[0] + right[0]
    return res
  }

  const res = helper(root)
  return Math.max(res[0], res[1])
}
// @lc code=end


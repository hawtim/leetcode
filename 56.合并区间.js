/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (40.75%)
 * Likes:    712
 * Dislikes: 0
 * Total Accepted:    168.1K
 * Total Submissions: 386.4K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 *
 *
 * 示例 1:
 *
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2:
 *
 * 输入: intervals = [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 * 注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。
 *
 *
 *
 * 提示：
 *
 *
 * intervals[i][0] <= intervals[i][1]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 时间复杂度是 O(nlogn) + O(n) => O(nlogn)
// 空间是 O(n)
var merge = function (intervals) {
  let res = []
  // 先排序一遍，可能是无序的
  intervals.sort((a, b) => a[0] - b[0])
  // 初始值
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    // 有重合
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1])
    } else {
      // 不重合，prev 推入 res 数组
      res.push(prev)
      // 更新 prev
      prev = cur
    }
  }
  // 最后循环结束再推入 prev 的值
  res.push(prev)
  return res
}

// @lc code=end

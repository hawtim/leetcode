/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (47.49%)
 * Likes:    405
 * Dislikes: 0
 * Total Accepted:    49.1K
 * Total Submissions: 98.2K
 * Testcase Example:  '[0,0,0,0]'
 *
 * 数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 *
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 *
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 *
 * 示例 1:
 *
 * 输入: cost = [10, 15, 20]
 * 输出: 15
 * 解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 *
 *
 * 示例 2:
 *
 * 输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出: 6
 * 解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
 *
 *
 * 注意：
 *
 *
 * cost 的长度将会在 [2, 1000]。
 * 每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 注意，楼层顶部不在 cost 中
var minCostClimbingStairs = function(cost) {
  var len = cost.length
  // dp[i] 表示到索引为 i 位置再选择向上爬一共需要的体力开销。
  var dp = []
  // 示例提示，你可以从楼梯之外跳一格或者两格进入需要消耗体力的楼梯
  // 所以 dp[0] dp[1] 这部分的开销就是 0。
  // dp[2] 进入 cost 的楼梯，开始有消耗。
  dp[0] = 0
  dp[1] = 0
  let i = 1
  while (i++ < len) {
    // 找到每一级楼梯跳一级或者跳两级方案中的最小值，存到 dp 记录中
    // 意思是，比如 [1, 2, 3, 4]，你要跳到索引为 2 的台阶上，有两种可能，
    // 1. 从 dp[0] + cost[0] => 1 或者 从 dp[1] + cost[1] => 2
    // 取最小值为 2，dp[2] 记为 1
    // console.log(
    //   'i = ', i,
    //   `dp[${i - 2}] + cost[${i - 2}]:`, dp[i - 2] + cost[i - 2],
    //   `dp[${i - 1}] + cost[${i - 1}]:`, dp[i - 1] + cost[i - 1]
    // )
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
  }
  return dp[len]
};
// @lc code=end


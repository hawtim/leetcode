/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (50.83%)
 * Likes:    430
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 72.4K
 * Testcase Example:  '10'
 *
 * 编写一个程序，找出第 n 个丑数。
 * 
 * 丑数就是质因数只包含 2, 3, 5 的正整数。
 * 
 * 示例:
 * 
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 * 
 * 说明:  
 * 
 * 
 * 1 是丑数。
 * n 不超过1690。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 三指针加动态规划
var nthUglyNumber = function(n) {
  var q2 = 0, q3 = 0, q5 = 0
  var dp = []
  dp[0] = 1
  for (var i = 1; i < n; i++) {
    // 素数筛的思想，递增的求出每一个丑数
    // 每个指针 p 乘上它当前所在的值就是下一个该指针 p 所能达到的丑数的值
    var temp = Math.min(dp[q2] * 2, dp[q3] * 3, dp[q5] * 5)
    // 三个指针求出来的最小值就是下一个丑数，对应的指针后移一位
    // 如果有多个指针求出来的值都是最小值则都需要进行后移一位，因为丑数数组是严格递增的
    if (temp == dp[q2] * 2) q2++
    if (temp == dp[q3] * 3) q3++
    if (temp == dp[q5] * 5) q5++
    dp[i] = temp
  }
  return dp[n - 1]
};
// @lc code=end


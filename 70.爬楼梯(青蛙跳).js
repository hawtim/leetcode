/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (48.14%)
 * Likes:    1338
 * Dislikes: 0
 * Total Accepted:    316.5K
 * Total Submissions: 622.4K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if( n < 2) return 1
  var dp = []
  dp[0] = 1;
  dp[1] = 1;
  let i = 1
  while (i++ < n) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
// @lc code=end

// 每一节楼梯都可以选择跳或者不跳，但最后一个楼梯一定要跳，所以是 2^(n-1)
// 变态青蛙跳
var insameJump = function (n) {
  return Math.pow(2, n - 1)
}
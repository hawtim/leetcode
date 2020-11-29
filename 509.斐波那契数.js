/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.55%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    92.2K
 * Total Submissions: 139.5K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 直接递归
// var fib = function(N) {
//   if ( N < 2) return N
//   return fib(N - 1) + fib(N - 2)
// };
// 递归加记忆化
// var fib = function() {
//   var mo = {}
//   return function(N) {
//     if (N < 2) return N
//     if (!mo[N - 1]) {
//       mo[N - 1] = fib(N - 1)
//     }
//     if (!mo[N - 2]) {
//       mo[N - 2] = fib(N - 2)
//     }
//     return mo[N] = mo[N - 1] + mo[N - 2]
//   }
// }()
// 动态规划
var fib = function(N) {
  if (!N) return 0
  var dp = []
  dp[1] = 1
  dp[2] = 1
  for (var i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[N]
}
// @lc code=end


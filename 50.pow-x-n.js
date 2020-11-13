/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (34.21%)
 * Likes:    539
 * Dislikes: 0
 * Total Accepted:    138.5K
 * Total Submissions: 375.2K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 *
 * 示例 2:
 *
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 *
 * 示例 3:
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 *
 * 说明:
 *
 *
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 第一种，暴力求解，超时
// var myPow = function(x, n) {
//   // n 是正、负、0 的情况
//   if (x == 0 ) return 0
//   if (n == 0) return 1
//   var result
//   if (n > 0) {
//     result = x
//     for (var i = 1; i < n; i++) {
//       result *= x
//     }
//   } else {
//     result = x
//     for (var i = 1; i < Math.abs(n); i++) {
//       result *= x
//     }
//     result = 1 / result
//   }
//   return result
// };

// 第二种，二分递归，88ms，时间复杂度 O(logN), 空间复杂度
function myPow(x, n) {
  if (n == 0) return 1
  if (n == 1) return x
  if (n == -1) return 1 / x
  // 分成两边，两边的值会是一样的，最终相乘再乘上奇数次
  var half = myPow(x, parseInt(n / 2))
  // 剩余的奇数次数
  var rest = myPow(x, parseInt(n % 2))
  return rest * half * half
}

// 第三种，快速幂

// @lc code=end


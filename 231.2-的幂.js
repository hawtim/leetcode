/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 *
 * https://leetcode-cn.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (47.83%)
 * Likes:    262
 * Dislikes: 0
 * Total Accepted:    87.7K
 * Total Submissions: 179.6K
 * Testcase Example:  '1'
 *
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: true
 * 解释: 2^0 = 1
 *
 * 示例 2:
 *
 * 输入: 16
 * 输出: true
 * 解释: 2^4 = 16
 *
 * 示例 3:
 *
 * 输入: 218
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

// var isPowerOfTwo = function(n) {
//   if(n <= 0) return false;
//   if(!(n & n-1 )) return true;
//   return false;
// };‰

var isPowerOfTwo = function(n) {
  // 如果一个整数是 2 的幂次方，必定可以被 2 的 31 次幂整除
  return n > 0 && 2147483648 % n == 0;
}
// @lc code=end


/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 *
 * https://leetcode-cn.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (54.01%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    24.3K
 * Total Submissions: 45K
 * Testcase Example:  '1\n2'
 *
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 * 
 * 示例 1:
 * 
 * 输入: a = 1, b = 2
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: a = -2, b = 3
 * 输出: 1
 * 
 */

// 使用位运算，重复这个过程：先异或，再与，然后进位，直到不需要进位就加完了

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (b === 0) return a
  var c = a ^ b
  var d = a & b
  d = d << 1
  return getSum(c, d)
};
// @lc code=end


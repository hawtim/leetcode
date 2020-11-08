/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (43.62%)
 * Likes:    573
 * Dislikes: 0
 * Total Accepted:    220K
 * Total Submissions: 481.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
// 时间复杂度O(n)，直接修改原数组
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var len = digits.length
  var rest = 0
  for (var i = len - 1; i >= 0 ; i--) {
    var value
    if (i === len - 1) {
      value = digits[i] + 1
    } else {
      value = digits[i] + rest
    }
    if (value >= 10) {
      value = value - 10
      rest = 1
    } else {
      rest = 0
    }
    digits[i] = value
  }
  if (rest === 1) {
    digits.unshift(rest)
  }
  return digits
};
// @lc code=end


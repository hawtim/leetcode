/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.74%)
 * Likes:    282
 * Dislikes: 0
 * Total Accepted:    85.3K
 * Total Submissions: 164.5K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * num1 和num2 的长度都小于 5100
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  function bigAdd(str1, str2) {
    // reverse 之后形成一个队列的结构，先进先出
    var queue1 = str1.split('').reverse()
    var queue2 = str2.split('').reverse()
    // 维护一个存结果的数组
    var sumArr = []
    var rest = 0
    var maxlen = Math.max(queue1.length, queue2.length)
    for (var i = 0; i < maxlen; i++) {
      // 这个是取出第一个
      var value1 = queue1.shift()
      var value2 = queue2.shift()
      var sum = addValue(value1, value2, rest)
      if (sum >= 10) {
        sum = sum - 10
        rest = 1
      } else {
        sum = sum
        rest = 0
      }
      // 避免最后再 reverse 一下
      sumArr.unshift(sum)
    }
    if (rest === 1) {
      sumArr.unshift(rest)
    }
    return sumArr.join('')
  }

  function addValue(str1, str2, rest) {
    const temp1 = str1 ? Number(str1) : 0
    const temp2 = str2 ? Number(str2) : 0
    return temp1 + temp2 + rest
  }
  return bigAdd(num1, num2)
};
// @lc code=end


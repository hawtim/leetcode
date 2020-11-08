/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (41.95%)
 * Likes:    506
 * Dislikes: 0
 * Total Accepted:    111.9K
 * Total Submissions: 251.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */
// 时间复杂度为 O(n2), 空间复杂度为 O(n)
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0'
  // 相乘最大的数字长度为两者长度之和
  var len = num1.length + num2.length
  var arr = new Array(len).fill(0)
  // 两重循环
  for (var i = num1.length - 1; i >= 0; i--) {
    for (var j = num2.length - 1; j >= 0; j--) {
      // console.log('before', arr)
      // 比如 123 * 45 就是
      // 3 * 5 + 0 = 15 即 arr = [0, 0, 0, 1, 5]
      // 3 * 4 + 1（上一步 15 / 10 剩下的 1）= 13，即 arr = [0, 0, 1, 3, 5]
      // ...
      let mul = num1[i] * num2[j] + arr[i + j + 1]
      // console.log(num1[i] * num2[j], arr[i + j + 1])
      arr[i + j] += Math.floor(mul / 10) // 可以理解为 十位
      arr[i + j + 1] = mul % 10 // 可以理解为个位
      // console.log('after', arr)
    }
  }
  return arr.join('').replace(/^0+/g, '')
};
// @lc code=end


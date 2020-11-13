/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (42.99%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    176.4K
 * Total Submissions: 378.7K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 正则加双指针 80 ms 99.51%
var isPalindrome = function(s) {
  if(!s) return true
  // 正则除去空格和符号。再转小写
  // [\w]+和\w+没有区别，都是匹配数字和字母下划线的多个字符
  // \W （大写 W 表示匹配除了数字，字母，下划线之外的所有字符）
  // 再加上 |_ 表示匹配下划线，这样就可以只保留数字和字母
  const str = s.replace(/[\W|_]/g, '').toLocaleLowerCase()
  var left = 0
  var right = str.length - 1
  while (left <= right) {
    if (str[left] == str[right]) {
      left++
      right--
      continue
    }
    if (str[left] !== str[right]) return false
  }
  return true
};

// 正则加双端队列，296ms
// var isPalindrome = function(s) {
//   if(!s) return true
//   const deque = []
//   const str = s.replace(/[\W|_]/g, '').toLocaleLowerCase()
//   for (var i = 0; i < str.length; i++) {
//     deque.push(str[i])
//   }
//   let result = true
//   while (deque.length > 1 && result) {
//     var first = deque.shift()
//     var last = deque.pop()
//     if (first !== last) {
//       result = false
//     }
//   }
//   return result
// };
// @lc code=end


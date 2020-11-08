/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.07%)
 * Likes:    1445
 * Dislikes: 0
 * Total Accepted:    228.2K
 * Total Submissions: 554.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let len = s.length
  // 分奇数偶数
  if (len % 2) return false
  for (let i = 0; i < len; i++) {
    let letter = s[i]
    switch (letter) {
      // 左括号全部入栈
      case '(': {
        stack.push(letter)
        break
      }
      case '[': {
        stack.push(letter)
        break
      }
      case '{': {
        stack.push(letter)
        break
      }
      // 匹配到右括号的时候出栈判断是否对称
      case ')': {
        if (stack.pop() !== '(') return false
        break
      }
      case ']': {
        if (stack.pop() !== '[') return false
        break
      }
      case '}': {
        if (stack.pop() !== '{') return false
        break
      }
    }
  }
  return !stack.length // 0 => true
}
// @lc code=end

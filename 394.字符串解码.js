/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (49.50%)
 * Likes:    588
 * Dislikes: 0
 * Total Accepted:    70.6K
 * Total Submissions: 132K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 从后往前考虑
// 直接让 ] 之前的所有字符逐个入栈 stack
// 然后一个个出栈考察，顺序就是先构建内层
// 首先遇到的肯定是 [] 中的字母，一个个拼成子串，直到遇到 [ 停下来
// 接着遇到数字，数字出栈，组成倍数，直到遇到 “非数字”
// 现在有了字母串和倍数，就构建出局部子串，一整个子串推入栈
// 这样，一个 [] 中的子串就构建好了放在 stack 里
// 它再和可能有的别的字母一起组成子串，再一起被倍数拷贝
// 再回到 stack 里，最后将 stack 里的项剩下都是字符串，join 拼接成字符串返回
var decodeString = (s) => {
  let stack = []
  for (const char of s) {
    if (char !== ']') { // ] 前的字符都入栈
      stack.push(char)
      continue
    }
    let cur = stack.pop() // 弹出一个来检测
    let str = '' // 组装字符串
    // 接下来肯定是遇到字母，直到遇到 [
    while (cur !== '[') {
      str = cur + str // cur字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 此时cur为 [，接下来要遇到数字
    let num = ''
    cur = stack.pop() // 用下一个将 [ 覆盖
    while (!isNaN(cur)) {
      num = cur + num // 数字字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 现在要么是字母，要么是 [
    stack.push(cur)
    stack.push(str.repeat(num))
  }
  return stack.join('')
}
// @lc code=end


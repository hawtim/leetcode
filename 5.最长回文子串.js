/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (29.13%)
 * Likes:    2938
 * Dislikes: 0
 * Total Accepted:    425.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length
  let res = ''
  // 创建二维数组
  let dp = Array.from(new Array(len), () => new Array(len).fill(0))
  // 从字符串首部开始
  for (let i = 0; i < len; i++) {
    // 从字符串i前开始依次向前查找
    for (let j = i; j >= 0; j--) {
      dp[j][i] = s[i] == s[j] && (i - j < 2 || dp[j + 1][i - 1])
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.substring(j, i + 1)
      }
    }
  }
  return res
}
// @lc code=end

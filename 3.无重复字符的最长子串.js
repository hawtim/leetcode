/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.53%)
 * Likes:    4554
 * Dislikes: 0
 * Total Accepted:    716.7K
 * Total Submissions: 2M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 快慢指针的思路，有性能浪费
// 时间 O(n^2)。空间 O(n)
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  if (s.length == 1) return 1
  var map = new Map()
  var max = 0
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      max = Math.max(max, map.size)
      map = new Map()
      i++
      break
    } else {
      map.set(s[i])
    }
    for (var j = i + 1; j < s.length; j++) {
      if (map.has(s[j])) {
        max = Math.max(max, map.size)
        map = new Map()
        break
      } else {
        map.set(s[j])
      }
    }
  }
  return max
}

// 解法二: 滑动窗口
// 时间复杂度 O(n) 空间复杂度 O(n)
var lengthOfLongestSubstring = function (s) {
  // 用一个滑动窗口装没有重复的字符
  let map = new Map()
  let i = -1
  // 枚举字符记录最大值即可
  let res = 0
  let len = s.length
  for (let j = 0; j < len; j++) {
    if (map.has(s[j])) {
      // 收缩窗口：如果出现了重复的字符，把左边界移动过去即可
      // console.log(map, j, i, map.get(s[j]))
      i = Math.max(i, map.get(s[j]))
    }
    // 挪动的过程中记录最大长度
    res = Math.max(res, j - i)
    map.set(s[j], j) // 如果没有重复的字符，则设置键为字符，值为索引
  }
  return res
}

// @lc code=end

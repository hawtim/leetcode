// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例:

// s = "abaccdeff"
// 返回 "b"

// s = ""
// 返回 " "


// 限制：

// 0 <= s 的长度 <= 50000

// 利用 indexOf 和 lastIndexOf 这两个 api

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return ' ';
};
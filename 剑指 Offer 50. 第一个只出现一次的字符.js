// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例:

// s = "abaccdeff"
// 返回 "b"

// s = ""
// 返回 " "


// 限制：

// 0 <= s 的长度 <= 50000

// 利用 indexOf 和 lastIndexOf 这两个 api
// 时间复杂度两次 indexOf 为 O(n)，空间复杂度为 0
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

// 利用 map，时间复杂度 O(n) 空间复杂度 O(n)

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (!s) return ' '
  var map = {}
  var arr = s.split('')
  var len = s.length
  for (var i = 0; i < len; i++) {
    var current = arr[i]
    var count = map[current]
    map[current] = count ? count + 1 : 1
  }
  for (var j = 0; j < len; j++) {
    var current = arr[j]
    if (map[current] == 1) {
      return current
    }
  }
  return ' '
};
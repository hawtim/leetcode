// 输入一个字符串，打印出该字符串中字符的所有排列。

//  

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

//  

// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
//  

// 限制：

// 1 <= s 的长度 <= 8

/**
 * @param {string} s
 * @return {string[]}
 */

// 递归的方式实现
// 核心思路：遍历字符串，取当前字符，剩下的字符递归的求全排列。最后剩下字符的全排列和当前字符合并，推入结果数组中。
// 细节实现：由于可能有重复字符，所以用 map 来保存已经遍历过的字符。每次遍历需要判断当前字符是否已经遍历。如果存在则跳过本次递归求解
// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/zhi-xing-yong-shi-136-ms-zai-suo-you-javascript--2/
var permutation = function(s) {
  let res = []
  let map = new Map();
  if (s.length > 1) {
    for (let i = 0; i < s.length; i++) {
      let cur = s[i];
      if (map.get(cur) === undefined) {
        map.set(cur, true);
      } else { //剪枝（如果当前字符已经遍历过，则跳过）
        continue;
      }
      let rest = s.substring(0, i) + s.substring(i + 1);
      // 剩余元素递归得到全排列
      let preRes = permutation(rest);
      // 合并当前元素和剩余元素全排列得到全排列解
      for (let i = 0; i < preRes.length; i++) {
        res.push(cur + preRes[i]);
      }
    }
  } else if (s.length === 1) {
    res.push(s);
  }
  return res;
};

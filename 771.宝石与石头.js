/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 *
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (82.05%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    120.4K
 * Total Submissions: 141.9K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 
 * 注意:
 * 
 * 
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 执行用时： 84 ms , 在所有 JavaScript 提交中击败了 84.89% 的用户
// 内存消耗： 38.9 MB , 在所有 JavaScript 提交中击败了 38.57% 的用户

var numJewelsInStones = function(J, S) {
  return S.split('').filter(stone => {
    return J.includes(stone)
  }).length
};

// 执行用时： 84 ms , 在所有 JavaScript 提交中击败了 84.89% 的用户
// 内存消耗： 39 MB , 在所有 JavaScript 提交中击败了 33.33% 的用户

var numJewelsInStones = function(J, S) {
  return S.split('').reduce((acc, current) => {
    return J.includes(current) ? acc + 1 : acc
  }, 0);
};

// @lc code=end


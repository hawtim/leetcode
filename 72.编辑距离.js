/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (56.69%)
 * Likes:    604
 * Dislikes: 0
 * Total Accepted:    36.8K
 * Total Submissions: 65K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 * 示例 1:
 *
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释:
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2:
 *
 * 输入: word1 = "intention", word2 = "execution"
 * 输出: 5
 * 解释:
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 */

// 分析
// 90% 的字符串问题都可以用动态规划解决，并且90%是采用二维数组
// 1. 定义数组元素的含义
// 那我们就定义 dp[i] [j]的含义为：
// 当字符串 word1 的长度为 i，字符串 word2 的长度为 j 时，
// 将 word1 转化为 word2 所使用的最少操作次数为 dp[i][j]

// 2. 找出关系数组元素间的关系式
// 大部分情况下，dp[i][j] 和 dp[i-1][j]、dp[i][j-1]、dp[i-1][j-1] 肯定存在某种关系
// 对 word1 可以执行三种操作
// 插入一个字符
// 删除一个字符
// 替换一个字符
// （1）、如果把字符 word1[i] 替换成与 word2[j] 相等，则有 dp[i][j] = dp[i-1][j-1] + 1;
// （2）、如果在字符串 word1末尾插入一个与 word2[j] 相等的字符，则有 dp[i][j] = dp[i][j-1] + 1;
// （3）、如果把字符 word1[i] 删除，则有 dp[i] [j] = dp[i-1][j] + 1;
// 我们应该选择一种操作，使得 dp[i][j] 的值最小
// dp[i][j] = min(dp[i-1][j-1]，dp[i][j-1]，dp[[i-1][j]]) + 1

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // var l1 = word1.length;
  // var l2 = word2.length;
  // var dp = []
  // for (let i = 0; i <= l1; i++) {
  //   dp[i] = [];
  // }
  // for (let i = 0; i <= l1; i++) {
  //   dp[i] = [];
  // }
  // for (var j = 0; j <= l2; j ++) {
  //   dp[0][j] = dp[0][j - 1] + 1;
  // }
  // for (var i = 0; i <= l1; i++) {
  //   dp[i][0] = dp[i - 1][0] + 1;
  // }
  // for (var i = 1; i <= l1; i++) {
  //   for (var j = 1; j <= l2; j++) {
  //     if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
  //       dp[i][j] = dp[i - 1][j - 1]
  //     } else {
  //       dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
  //     }
  //   }
  // }
  // return dp[l1][l2]
  let n = word1.length;
  let m = word2.length;
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push([])
    for (let j = 0; j <= m; j++) {
      if (i * j) {
        dp[i][j] = word1[i - 1] == word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1);
      } else {
        dp[i][j] = i + j;
      }
    }
  }
  return dp[n][m];
};
// @lc code=end
/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (40.81%)
 * Likes:    637
 * Dislikes: 0
 * Total Accepted:    86.8K
 * Total Submissions: 191.2K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 使用广度优先搜索
const ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0
  const queue = []
  queue.push([beginWord, 1])
  while (queue.length) {
    const [currentWord, level] = queue.shift()
    if (currentWord == endWord) return level
    // 遍历字典中的单词并检查是否可转换。最佳 370ms
    // 这种方法必须检查整个字典，确实变换字母来得快
    // 如果可以转换，进队列，并且删除该单词，避免重复
    // for (let word of wordSet) {
    //   if (canConvert(currentWord, word)) {
    //     queue.push([word, level + 1])
    //     wordSet.delete(word)
    //   }
    // }
    // 这种办法对于大字典来说效果更佳，最佳是 220ms，
    // 但内存开销大，空间换时间，wordSet.has(word)
    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const word = currentWord.slice(0, i) 
          + String.fromCharCode(c) 
          + currentWord.slice(i + 1);
        if (wordSet.has(word)) {
          queue.push([word, level + 1]);
          wordSet.delete(word);
        }
      }
    }
  }
  return 0
};

// 检查是否可转换，对于小字典来说效果佳
// 需要循环检查每个字符，如果单个单词长的话效果不佳
// function canConvert(s1, s2) {
//   if (s1.length !== s2.length) return false
//   let count = 0
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       count++
//     }
//     if (count > 1) return false
//   }
//   return count === 1
// }
// @lc code=end


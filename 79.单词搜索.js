/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (41.04%)
 * Likes:    681
 * Dislikes: 0
 * Total Accepted:    119.6K
 * Total Submissions: 273.4K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 *
 *
 *
 * 提示：
 *
 *
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 时间复杂度为 O(rxc)
// 空间复杂度 O(1)
var exist = function(board, word) {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      if (dfs(board, word, r, c, 0)) {
        return true
      }
    }
  }
  return false
};

function dfs(grid, word, r, c, index) {
  // 边界条件
  if (!inArea(grid, r, c) || grid[r][c] !== word[index]) return false
  // 如果 word 的每个字符都查找完，返回 true
  if (word.length - 1 === index) return true
  // 保存临时值，避免示例中比如 ABCCED 的时候，走到第二个 C 的时候，检查四个方向时会发现上方还有一个 C 。
  var temp = grid[r][c]
  // 满足题目中要求同一个单元格内的字母不允许重复使用
  grid[r][c] = '.'
  // 检查四个方向，如果有一个方向找到当前的单词，就返回 true
  // 向右 向左 向上 向下
  var result = dfs(grid, word, r, c + 1, index + 1)
    || dfs(grid, word, r, c - 1, index + 1)
    || dfs(grid, word, r + 1, c, index + 1)
    || dfs(grid, word, r - 1, c, index + 1)
  grid[r][c] = temp
  return result
}

function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}
// @lc code=end


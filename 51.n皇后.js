/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (68.59%)
 * Likes:    665
 * Dislikes: 0
 * Total Accepted:    88.1K
 * Total Submissions: 120.1K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 *
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 *
 *
 * 示例：
 *
 * 输入：4
 * 输出：[
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 *
 *
 */

//  递归实现，fail
// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result[i] = []
  }
  var grid = buildGrid(n, n)
  checkRow(grid, n, 0, 0, result)
  console.log(result)

  // // 处理最终的结果
  // for (var r = 0; r < n; r++) {
  //   grid[r] = [grid[r].join('')]
  // }
  // return grid
  // buildResult(result)
};

function checkRow(grid, n, r = 0, c = 0, result) {
  result[r] = []
  for (; c < n; c++) {
    console.log('r, c', r, c)
    // 行固定，检查每一列
    if (grid[r][c] == 'B' && r != n - 1) {
      disableGrid(grid, r, c)
      grid[r][c] = 'Q'
      const temp = checkRow(grid, n, r + 1, 0, result)
      if (Array.isArray(temp)) {
        result[r].push(temp)
      }
    } else if (grid[r][c] == 'B' && r == n - 1) {
      grid[r][c] = 'Q'
      result[r].push(temp)
    } else {
      result[r].push(false)
    }
  }
}

function dfs(grid, r, c) {
  if (r > grid.length - 1) return grid
  if (r < grid.length - 1 && grid[r][c] == 'B') {
    disableGrid(grid, r, c)
    grid[r][c] = 'Q'
  }
  if (r < grid.length - 1 && grid[r][c] == 'X') {
    return grid
  }
  if (r == grid.length - 1 && grid[r][c] == 'B') {
    grid[r][c] = 'Q'
    return grid
  }

  // 检查是否有空格下一行
  grid = dfs(grid, r + 1, grid[0].length)
  return grid
}

// =============== checked ================= //

// 构建最终结果
function buildResult(result) {
  result.forEach(item => {
    for (var r = 0; r < n; r++) {
      result[item] = [result[item][r].join('').replace('X', '.')]
    }
  })
}

// 检查直线和斜线的算法，时间复杂度 O(n^3)
function disableGrid(grid, row, col) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[0].length; c++) {
      // 处理直线
      if (r == row || c == col) {
        if (grid[r][c] == 'B') {
          grid[r][c] = 'X'
        }
      }
      // 处理斜线
      for (var s = 0; s < grid.length; s++) {
        if (!inArea(grid, r, c)) continue
        // 检查四个方向
        if (
          r == row + s && c == col + s ||
          r == row - s && c == col - s ||
          r == row - s && c == col + s ||
          r == row + s && c == col - s
        ) {
          if (grid[r][c] == 'B') {
            grid[r][c] = 'X'
          }
        }
      }
    }
  }
}

// 构建棋盘
function buildGrid(m, n) {
  var grid = new Array(m).fill([])
  for (var c = 0; c < m; c++) {
    grid[c] = new Array(n).fill('B')
  }
  return grid
}

// 检查是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}
// @lc code=end


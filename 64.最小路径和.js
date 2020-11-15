// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 步骤一：定义数组元素的含义
// 当机器人从左上角走到(i, j) 这个位置时，最下的路径和是 dp[i] [j]。那么，dp[m-1] [n-1]
// 步骤二：找出关系数组元素间的关系式
// 一种是从 (i-1, j) 这个位置走一步到达
// 一种是从(i, j - 1) 这个位置走一步到达

// 计算哪一个路径和是最小的，那么我们要从这两种方式中，选择一种，使得dp[i][j] 的值是最小的

// dp[i][j] = Math.min(dp[i-1][j]，dp[i][j-1]) + arr[i][j]; // arr[i][j] 表示网格种的值

// 步骤三：找出初始值

/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

// 1. 不需要额外空间的
var minPathSum = function(grid) {
  var row = grid.length
  var column = grid[0].length
  // 不需要额外空间，直接修改 grid 
  // 时间复杂度为 O(m x n)
  for (var r = 0; r < row; r++) {
    for (var c = 0; c < column; c++) {
      if(r == 0 && c == 0) continue;
      else if(r == 0)  grid[r][c] = grid[r][c - 1] + grid[r][c];
      else if(c == 0)  grid[r][c] = grid[r - 1][c] + grid[r][c];
      else grid[r][c] = Math.min(grid[r - 1][c], grid[r][c - 1]) + grid[r][c];
    }
  }
  return grid[row - 1][column - 1]
};

// 2. 使用二维数组不要修改 grid 的
// 额外的空间，grid 的空间。
// 时间复杂度还是一样 O(m x n)
// var minPathSum = function (grid) {
//   let row = grid.length, column = grid[0].length
//   let dp = []
//   for (let r = 0; r < row; r++) {
//     dp[r] = []
//   }
//   for (let r = 0; r < row; r++) {
//     for (let c = 0; c < column; c++) {
//       if (r == 0 && c == 0) {
//         dp[r][c] = grid[r][c]
//       } else if (r == 0) {
//         // i == 0 只能是向下走
//         dp[r][c] = dp[r][c - 1] + grid[r][c]
//       } else if (c == 0) {
//         // j == 0 只能是向右走
//         dp[r][c] = dp[r - 1][c] + grid[r][c]
//       } else {
//         dp[r][c] = grid[r][c] + Math.min(dp[r][c - 1], dp[r - 1][c])
//       }
//     }
//   }
//   return dp[row - 1][column - 1]
// }
// @lc code=end

// minPathSum([[0, 4], [3, 5]])

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

 var minPathSum = function (grid) {
  let l = grid.length, h = grid[0].length;
  let dp = [];
  for (let i = 0; i < l; i++) {
    dp[i] = [];
  }
  // console.log(dp)
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < h; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = grid[i][j]
      } else if (i == 0) {
        // i == 0 只能是向下走
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (j == 0) {
        // j == 0 只能是向右走
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  // console.log(dp)
  return dp[l - 1][h - 1]
};
// @lc code=end

// minPathSum([[0, 4], [3, 5]])
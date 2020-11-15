// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

//  

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1
// 提示：

// 1 <= n,m <= 100
// 0 <= k <= 20

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 时间复杂度 O(mxn)
// 空间复杂度 O(mxn)
var movingCount = function(m, n, k) {
  // 构建矩阵
  var grid = buildGrid(m, n)
  // 一次深度遍历
  return dfs(grid, 0, 0, k)
};

function dfs(grid, r, c, k) {
  // 不在网格中，不是允许的格子，已经检查过的格子
  if (!inArea(grid, r, c) || !isAllow(r, c, k) || grid[r][c]) return 0
  grid[r][c] = true
  // 只需要检查向右向下
  return 1 + dfs(grid, r, c + 1, k)  + dfs(grid, r + 1, c, k)
}

// 检查是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}

// 构建网格
function buildGrid(m, n) {
  var grid = new Array(m).fill([])
  for (var c = 0; c < m; c++) {
    grid[c] = new Array(n).fill(false)
  }
  return grid
}

// 检查是否是可以走的网格
function isAllow(r, c, k) {
  // 运用了隐式转换
  const sum = (r + '' + c).split('').reduce((a, b) => +a + +b)
  if (sum <= k) return true
  return false
}

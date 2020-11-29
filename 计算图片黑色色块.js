// 小明拿到了一张黑白照片，发现照片中有很多黑色块
// （即大量相邻的黑色像素——若两个像素是上下或左右紧贴着，表示它们相邻）。
// 他很好奇照片中究竟有多少个黑色块，于是将其转换为了一个 N * M 的二维数组，
// 数组中的每个数字都介于 0 ~255 之间，表示图片中对应像素的灰度值
// （0 是纯黑，255 是纯白，视觉上为黑色的像素灰度值 ≤ 50），
// 但是他不知道该如何写代码统计，你可以帮帮他吗？

// 注：
// 由于经过了网络压缩，照片的长和宽最大只有 1920px 和 1080px。
// 灰度值：纯黑和纯白按不同的比例来混合就得到不同的灰度值。R=G=B=255为白色，R=G=B=0为黑色，R=G=B=小于255的某个整数时，此时就为某个灰度值。

// 类似岛屿问题

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先遍历
var numBlacks = function(grid) {
  var count = 0
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[0].length; c++) {
      // 已经遍历过的节点已经变成 256
      // 判断条件是灰度值小于 50
      if (grid[r][c] <= 50) {
        count++
        dfs(grid, r, c)
      }
    }
  }
  return count
};

function dfs(grid, r, c) {
  if (!inArea(grid, r, c)) return
  // 检查是否是岛屿, 或者是否已访问
  if (grid[r][c] == 256) return
  // 标记为已访问
  grid[r][c] = 256
  dfs(grid, r - 1, c)
  dfs(grid, r + 1, c)
  dfs(grid, r, c - 1)
  dfs(grid, r, c + 1)
}
// 检查边界
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}


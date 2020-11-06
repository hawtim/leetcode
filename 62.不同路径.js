/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

//  分析
// 1.定义数组元素的含义
// 当机器人从左上角走到(i, j) 这个位置时，一共有 dp[i] [j] 种路径，那么 dp[m - 1][n - 1] 就是我们要的答案了
// tips: 这个网格相当于一个二维数组，数组是从下标为 0 开始算起的，所以右下角的位置是 (m-1, n - 1)，所以 dp[m-1] [n-1] 就是我们要找的答案。

// 2. 找出关系数组元素间的关系式
// 由于机器人可以向下走或者向右走，所以有两种方式到达 dp[i][j]
// 第一种，dp[i - 1][j]
// 第二种，dp[i][j - 1]
// 计算所有可能的步骤，所以是把所有可能走的路径都加起来 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

// 3. 找出初始值
// 显然，当 dp[i] [j] 中，如果 i 或者 j 有一个为 0，关系式是不成立的。

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  // 先创建以 m 为长度的数组，目标创造一个矩阵
  // tips 在中国大陆，横向的元素组称为“行”，纵向称为“列”，而在台湾则相反，横向称为“列”，纵向称为“行”
  var dp = new Array(m)
  // 先填充第一行
  for (var i = 0; i < n; i++) {
    // 第一列里每一行的长度为 m
    dp[i] = new Array(m)
    // 设置第一列每一项都是 1
    dp[i][0] = 1
  }
  // 再填充第一行
  for (var j = 0; j < m; j++) {
    // 第一行每一项都是 1
    dp[0][j] = 1
  }
  //从第二行开始循环，每一项从左到右 根据上面分析二的情况，处理方案。
  for (var y = 1; y < n; y++) {
    for (var x = 1; x < m; x++) {
      dp[y][x] = dp[y - 1][x] + dp[y][x - 1]
    }
  }
  // console.log(dp)
  return dp[n - 1][m - 1]
}
// @lc code=end

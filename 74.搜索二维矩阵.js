/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (37.68%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    69.7K
 * Total Submissions: 178K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [], target = 0
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 0 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 特性，向右向下递增，并且下一行的初始值大于上一行的结束值。
// 分析，只能从左下角或者右上角开始遍历，因为这两个位置向水平方向和垂直方向移动都是一增一减。
var searchMatrix = function(matrix, target) {
  // !!! 从左下角开始遍历
  let len = matrix.length, row = len - 1, col = 0
  if (len === 0) return false
  if (len === 1 && matrix[row].length === 0) return false
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] < target) {
      col++
    } else if (matrix[row][col] > target) {
      row--
    }
  }
  return false

  // // !!! 从右上角开始遍历
  // let len = matrix.length, row = 0
  // if (len === 0) return false
  // if (len === 1 && matrix[0].length === 0) return false
  // var itemlen = matrix[0].length
  // var col = itemlen - 1
  // // 主要是判断条件的问题，++ 不能超过边界。所以只能 < ,-- 可以等于0 所以用 >=
  // while (row < len && col >= 0) {
  //   if (matrix[row][col] === target) return true
  //   if (matrix[row][col] > target) {
  //     col--
  //   } else if (matrix[row][col] < target) {
  //     row++
  //   }
  // }
  // return false
};
// @lc code=end


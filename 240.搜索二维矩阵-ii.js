/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (39.65%)
 * Likes:    473
 * Dislikes: 0
 * Total Accepted:    87.1K
 * Total Submissions: 205.4K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n' +
  '5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 *
 *
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 *
 *
 * 示例:
 *
 * 现有矩阵 matrix 如下：
 *
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 *
 *
 * 给定 target = 5，返回 true。
 *
 * 给定 target = 20，返回 false。
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 方案一，循环加 includes 查找 600ms
  // var start = 0
  // var end = matrix.length - 1
  // while (start <= end) {
  //   if (matrix[start].includes(target) || matrix[end].includes(target)) {
  //     return true
  //   } else {
  //     start++
  //     end--
  //   }
  // }
  // return false

  // 方案二，二维数组直接打平，加 includes 1400ms
  // var arr = [].concat(...matrix)
  // return arr.includes(target)

  // 方案三，遍历二维数组，从左下角开始遍历  900ms
  // let len = matrix.length
  // let result = false
  // for (row = len - 1; row >= 0; row--) {
  //   for (col = 0; col < matrix[row].length; col++) {
  //     if (matrix[row][col] == target) {
  //       result = true
  //       break
  //     }
  //   }
  //   if (result) break
  // }
  // return result

  //思路：从左下角开始遍历
  // 行：当前值比 target 小，row 向上移动
  // 列：当前值比 target 小，col 向右移动
  // 时间复杂度 O(N) 总元素的数量。 1/2N 左右吧。
  let len = matrix.length, row = len - 1, col = 0
  if (len === 1 && matrix[row].length === 0) return false;
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return true
    }
    if (matrix[row][col] > target) {
      row--
    } else if (matrix[row][col] < target) {
      col++
    }
  }
  return false
};

// @lc code=end


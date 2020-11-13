/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (67.11%)
 * Likes:    181
 * Dislikes: 0
 * Total Accepted:    74K
 * Total Submissions: 103.6K
 * Testcase Example:  '[4,2,5,7]'
 *
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 *
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 *
 * 你可以返回任何满足上述条件的数组作为答案。
 *
 *
 *
 * 示例：
 *
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= A.length <= 20000
 * A.length % 2 == 0
 * 0 <= A[i] <= 1000
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
// 时间复杂度 O(n), 空间复杂度 O(n) 都是数组的长度
// var sortArrayByParityII = function(A) {
//   if (A.length < 2) return []
//   // 筛选出奇数偶数，O(n + n + n) => O(n)
//   var odd = []
//   var even = []
//   A.forEach(item => {
//     if (item % 2 === 1) {
//       odd.push(item)
//     } else {
//       even.push(item)
//     }
//   })
//   var result = []
//   var len = even.length
//   for (var i = 0; i < len; i++) {
//     result.push(even[i], odd[i])
//   }
//   return result
// };

// 时间复杂度O(n), 空间复杂度 O(1)，直接修改数组
var sortArrayByParityII = function(A) {
  let oddIndex = 1
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 == 1) { // 在偶数位遇到了奇数
      while (A[oddIndex] % 2 != 0) { // 找一个奇数位上的偶数
        oddIndex += 2
      }
      [A[i], A[oddIndex]] = [A[oddIndex], A[i]]
    }
  }
  return A
}
// @lc code=end


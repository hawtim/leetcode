/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (68.53%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    142.2K
 * Total Submissions: 194.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   var result = {}
//   for (var i = 0; i < nums1.length; i++) {
//     if (result[nums1[i]]) {
//       continue
//     }
//     if (nums2.includes(nums1[i])) {
//       result[nums1[i]] = true
//     }
//   }
//   return Object.keys(result)
// };

var intersection = function(nums1, nums2) {
  function filter(long, short) {
    var result = long.filter(item => short.includes(item))
    return [...new Set(result)]
  }
  // return filter(nums1, nums2)
  // 区分长短对速度有小幅差异
  var len1 = nums1.length
  var len2 = nums2.length

  if (len1 >= len2) {
    return filter(nums1, nums2)
  }
  if (len1 < len2) {
    return filter(nums2, nums1)
  }
}
// @lc code=end


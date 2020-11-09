/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 *
 * https://leetcode-cn.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (53.02%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    75.7K
 * Total Submissions: 136.8K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * 
 */

// @lc code=start
// 每次都是对半查找所以每次查找的区间大小就是n，n/2，n/4，…，n/2^k
// 最差的情况就是 nums.length = 2 的时候， n / 2^k = 1 此时 k = logn，时间复杂度为 O(logn)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var start = 0
  var end = nums.length - 1 // 减去 1 会更加好理解
  // 这里要用小于等于
  while (start <= end) {
    var mid = Math.floor((start + end) / 2)
    var midValue = nums[mid]
    if (midValue === target) {
      return mid
    } else if (midValue > target) {
      end = mid - 1
    } else if (midValue < target) {
      start = mid + 1
    }
  }
  return -1
};
// @lc code=end


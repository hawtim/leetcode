/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (62.80%)
 * Likes:    789
 * Dislikes: 0
 * Total Accepted:    230.8K
 * Total Submissions: 355.7K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums.length) return 0
  // 多个相同的时候按照顺序，要找的是第一个出现的，并且最终满足条件的
  var length = nums.length
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    var value = nums[i]
    if (map[value]) {
      map[value]++
    } else {
      map[value] = 1
    }
    if (map[value] > nums.length / 2) return value
  }
  return 0
};

// 2. 维护一个动态的数字
// @lc code=end


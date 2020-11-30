/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 *
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (37.15%)
 * Likes:    494
 * Dislikes: 0
 * Total Accepted:    38.1K
 * Total Submissions: 91.2K
 * Testcase Example:  '[5,2,6,1]'
 *
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于
 * nums[i] 的元素的数量。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [5,2,6,1]
 * 输出：[2,1,1,0] 
 * 解释：
 * 5 的右侧有 2 个更小的元素 (2 和 1)
 * 2 的右侧仅有 1 个更小的元素 (1)
 * 6 的右侧有 1 个更小的元素 (1)
 * 1 的右侧有 0 个更小的元素
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力求解
// 时间 O(n^2)
// 空间 O(n)
var countSmaller = function(nums) {
  var arr = []
  for (var i = 0; i < nums.length; i++) {
    var count = 0
    if (i + 1 >= nums.length) {
      arr[i] = 0
    }
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++
      }
      if (j == nums.length - 1) {
        arr[i] = count
      }
    }
  }
  return arr
};


// @lc code=end



// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

 

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100
// 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划的思路
var maxSubArray = function(nums) {
  if (!nums || !nums.length) return -2147483648
  // 用 new Array 能更加精准的创建数组空间避免浪费
  var dp = new Array(nums.length)
  dp[0] = nums[0]
  var max = dp[0]
  for (var i = 1; i < nums.length; i++) {
    // 如果当前值加上之前累积的值 比 当前值还要小，那么这个位置的最大值由 nums[i] 决定
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    // 每进行一步判断一次最大值
    max = Math.max(max, dp[i])
  }
  return max
};
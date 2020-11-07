/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (49.95%)
 * Likes:    2604
 * Dislikes: 0
 * Total Accepted:    359.1K
 * Total Submissions: 681.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
// https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans

// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字

// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字

// 每次比较 sum 和 ans 的大小，将最大值置为ans，遍历结束返回结果

// 时间复杂度为 O(n)，把数组循环一遍

// 1.假如全是负数，那就是找最大值即可，因为负数肯定越加越大。
// 2.如果有正数，则肯定从正数开始计算和，不然前面有负值，和肯定变小了，所以从正数开始。
// 3.当和小于零时，这个区间就告一段落了，然后从下一个正数重新开始计算(也就是又回到 2 了) 。而 dp 也就体现在这个地方。

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 这句是 leetcode 的测试需要的返回值
  if (!nums.length) return Math.pow(-2, 31)
  // ans 用于保留最大值的引用
  var ans = nums[0]
  var sum = 0
  var i = 0
  // 避免 len 重复查值
  var len = nums.length
  // 使用 while 循环
  while(i < len) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    ans = Math.max(ans, sum)
    i++
  }
  return ans
}
// @lc code=end
console.log("maxSubArray([2, 3, -1, 1, -3])", maxSubArray([2, 3, -1, 1, -3]))
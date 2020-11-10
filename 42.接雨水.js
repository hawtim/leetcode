/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (49.53%)
 * Likes:    1804
 * Dislikes: 0
 * Total Accepted:    163.9K
 * Total Submissions: 309K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 0
 * 0
 *
 *
 */

// 定理一：在某个位置i处，它能存的水，取决于它左右两边的最大值中较小的一个。
// 定理二：当我们从左往右处理到left下标时，左边的最大值left_max对它而言是可信的，但right_max对它而言是不可信的。（见下图，由于中间状况未知，对于left下标而言，right_max未必就是它右边最大的值）
// 定理三：当我们从右往左处理到right下标时，右边的最大值right_max对它而言是可信的，但left_max对它而言是不可信的。
// 推理：对于位置left而言，它左边最大值一定是left_max，右边最大值“大于等于”right_max。
// 这时候，如果left_max<right_max成立，那么它就知道自己能存多少水了。无论右边将来会不会出现更大的right_max，都不影响这个结果。所以当left_max<right_max时，我们就希望去处理left下标，反之，我们希望去处理right下标。

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var trap = function(height) {
  var left = 0, right = height.length - 1
  var left_max = right_max = 0
  var ans = 0
  // 等于的条件在于，必须让左右指针走到同一个柱子上，才能正确的计算两边的容量
  while (left <= right) {
    // 关键是这个条件，由定理1可知，容量取决于低的那边，如果是左边低，那么累加每一步高的一边减去当前值，如果是右边低，则累加另外一边。
    if (left_max < right_max) {
      // 在左边的时候，left_max 对于 height[left] 是可信的
      ans += Math.max(0, left_max - height[left])
      console.log("ans+= -> Math.max(0, left_max - height[left])", ans)
      // 更新左边最大值并移动指针
      left_max = Math.max(left_max, height[left])
      console.log("left_max ->  Math.max(left_max, height[left])",  Math.max(left_max, height[left]))
      left++
    } else {
      // 在右边的时候，right_max 对于 height[right] 是可信的
      ans += Math.max(0, right_max - height[right])
      // 更新右边最大值并移动指针
      right_max = Math.max(right_max, height[right])
      right--
    }
  }
  return ans
}

// @lc code=end
trap([0,1,0,2,1,0,1,3,2,1,2,1])
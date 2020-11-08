/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.20%)
 * Likes:    2729
 * Dislikes: 0
 * Total Accepted:    359.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   const set = new Set()
//   const result = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const arr = [nums[i], nums[j], nums[k]]
//           arr.sort((a, b) => a - b)
//           set.add(arr.toString())
//         }
//       }
//     }
//   }
//   set.forEach(item => {
//     result.push(item.split(','))
//   })
//   return result
// };


// 时间复杂度 O(n^2)
// 空间复杂度 O(1) 指针使用常数大小的额外空间。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针法铺垫： 先将给定 nums 排序，复杂度为 O(NlogN)
  nums.sort((a, b) => a - b)
  let result = []
  // 一个指针随着循环前进
  // 一个循环是 O(N), 内部双指针 O(N)，所以为 O(N^2)
  for (let k = 0; k < nums.length; k++) {
    // 因为 nums[k] 是最小值，如果最小值大于 0，这个循环就跳出了
    if (nums[k] > 0) break
    // 跳过相同的 nums 节点
    if(k > 0 && nums[k] == nums[k - 1]) continue;
    // 定义两个指针 j k
    let left = k + 1, right = nums.length - 1
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[k]
      if (sum < 0) {
        // 右移左指针
        left++
      } else if (sum > 0) {
        // 左移右指针
        right--
      } else {
        result.push([nums[k], nums[left++], nums[right--]])
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result
}

// @lc code=end


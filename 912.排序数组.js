/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode-cn.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (53.44%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    94.5K
 * Total Submissions: 158.8K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
  // !!! === 冒泡排序，空间复杂度 O(n^2) 空间复杂度 O(1)，大概 7000ms
  // 最先固定的是尾部的数字。所以 nums.length - 1 - j，-1 是因为在倒数第二个数字会和最后一个数字比对并做交换。
  // 图解 https://images2017.cnblogs.com/blog/849589/201710/849589-20171015223238449-2146169197.gif
  // for (let i = 0; i < nums.length; i++) {
  //   let finished = true
  //   // 关键条件是 nums.length - 1 - j 排除已经检查过的
  //   for (let j = 0; j < nums.length - 1 - i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       // 交换位置
  //       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
  //       finished = false
  //     }
  //   }
  //   if (finished) break
  // }
  // !!! === 快速排序1的实现，递归占用内存大，稳定性一般。大概 144ms
  // 图解：http://www.conardli.top/docs/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.gif
  // 时间复杂度平均为 O(nlogn) 最差为 O(n^2)（完全排好序的数组）, 多数情况下为小于 nlogn。
  // 空间复杂度为 O(logn), 递归调用
  function quickSort(nums) {
    if (nums.length < 2) return nums
    // 用了 0
    var pivot = nums[0]
    var left = []
    var right = []
    // 所以这里要从 1 开始
    for (var i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i])
      } else {
        right.push(nums[i])
      }
    }
    return sortArray(left).concat([pivot], sortArray(right))
  }
  return quickSort(nums)
  // !!! === 选择排序的实现 大概 1150ms
  // 图解：http://www.conardli.top/docs/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.gif
  // 时间复杂度 O(n^2), 空间复杂度 O(1)
  // function selectSort(nums) {
  //   if (nums.length < 2) return nums
  //   for (let i = 0; i < nums.length; i++) {
  //     // 最小值的位置前进一位
  //     let minIdx = i
  //     // i + 1 是排除那些已排过的元素
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] < nums[minIdx]) {
  //         // 一直更新最小位置
  //         minIdx = j
  //       }
  //     }
  //     // 和当前最小值交换值
  //     [nums[minIdx], nums[i]] = [nums[i], nums[minIdx]]
  //   }
  //   return nums
  // }
  // return selectSort(nums)
  // !!! === 归并排序的实现 260ms 时间复杂度 O(nlogn)，空间复杂度 O(logn)
  // function mergeSort(nums) {
  //   if (nums.length < 2) return nums
  //   var mid = Math.floor(nums.length / 2)
  //   var left = nums.slice(0, mid)
  //   var right = nums.slice(mid)
  //   return merge(mergeSort(left), mergeSort(right))
  // }
  // function merge(left, right) {
  //   var temp = []
  //   while (left.length && right.length) {
  //     if (left[0] < right[0]) {
  //       temp.push(left.shift())
  //     } else {
  //       temp.push(right.shift())
  //     }
  //   }
  //   while(left.length) {
  //     temp.push(left.shift())
  //   }
  //   while(right.length) {
  //     temp.push(right.shift())
  //   }
  //   return temp
  // }
  // return mergeSort(nums)
  // !!! === 插入排序的实现,2020ms,时间复杂度 O(n^2),空间复杂度 O(1)
  // 图解：http://www.conardli.top/docs/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.gif
  // function insertSort(nums) {
  //   if (!nums || nums.length < 2) return nums
  //   for (let i = 0; i < nums.length; i++) {
  //     let target = i
  //     // 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位
  //     for (let j = i - 1; j >= 0; j--) {
  //       // i 一层循环的值，如果在 j 层循环中找到
  //       if (nums[target] < nums[j]) {
  //         [nums[target], nums[j]] = [nums[j], nums[target]]
  //         target = j
  //       } else {
  //         break
  //       }
  //     }
  //   }
  //   return nums
  // }
  // return insertSort(nums)
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (66.00%)
 * Likes:    1579
 * Dislikes: 0
 * Total Accepted:    293.5K
 * Total Submissions: 417.7K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *
 * 输入: [2,2,1]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 四种解法
// 1. 先排序，然后相同元素则会相邻。循环一次判断前一个元素是否等于后一个元素，间隔一个判断一个即可，如果不相等就是想要的结果。
// 2. 由于目标元素只有一次，其他元素有多次，因此，依次删除列表的元素，同一个元素删除两次，报错则为目标值。
// 3. 一个元素出现一次、其他出现多次，那么数组求和，与去重后的和相差的就是目标值
// 4. 位运算

// 1. 先排序，然后相同元素则会相邻。循环一次判断前一个元素是否等于后一个元素，间隔一个判断一个即可，如果不相等就是想要的结果。
// 时间复杂度 O(nlogn)，非线性，没额外的空间占用，执行时间 108ms
// var singleNumber = function (nums) {
//   if (nums.length == 1) return nums[0] // 如果数组长度为1，则直接返回即可
//   nums.sort((a, b) => a - b) // 对数组进行排序，使其相同元素靠在一起
//   for (var i = 1; i < nums.length; i += 2) { // 循环数组，验证前后是否相同，由于原始出现两次，因此可跳跃判断
//     if (nums[i - 1] != nums[i]) return nums[i - 1]
//     if ((i + 2) === nums.length) { // 判断单一元素在排序后数组的最后面
//       return nums[nums.length - 1]
//     }
//   }
// }

// 2. 由于目标元素只有一次，其他元素有多次。如果重复，删除掉重复的，没有重复则为该值。
// 时间复杂度 O(n^2),非线性，O(1) 额外空间，执行时间 250ms
// var singleNumber = function(nums) {
//   if (!nums.length) return 0
//   while (true) {
//     var s = nums.shift()
//     if (!nums.length) return s
//     const index = nums.findIndex(num => num == s)
//     if (index >= 0) {
//       nums.splice(index, 1)
//     } else {
//       return s
//     }
//   }
// };

// 3. 一个元素出现一次、其他出现多次，那么数组求和，与去重后的和相差的就是目标值
// 时间复杂度 O(n) + O(1/2n) => O(3/2n) => O(n)
// 空间复杂度 O(1/2n) 还是 O(n), 执行时间 100ms
// var singleNumber = function(nums) {
//   if (!nums.length) return 0
//   var newSet = new Set(nums)
//   var sum = nums.reduce((a, b) => a + b)
//   var setSum = 0
//   newSet.forEach(item => setSum += item)
//   // console.log(sum, setSum)
//   return setSum * 2 - sum
// }

// 4. 异或的解法，时间复杂度 O(n)，空间复杂度 O(1), 执行时间 80ms，
// 1异或1=0 0异或0=0 1异或0=0
var singleNumber = function(nums) {
  var ans = nums[0]
  if (nums.length > 1) {
    for (var i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i]
      console.log(ans)
    }
  }
  return ans
};
// @lc code=end

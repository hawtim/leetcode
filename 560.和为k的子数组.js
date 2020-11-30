/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.38%)
 * Likes:    695
 * Dislikes: 0
 * Total Accepted:    79.5K
 * Total Submissions: 176.6K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * 
 * 示例 1 :
 * 
 * 
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 * 
 * 
 * 说明 :
 * 
 * 
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 利用 hash 表
// 时间复杂度 O(n)，空间复杂度 O(n)
var subarraySum = function(nums, k) {
  // key为前缀和，value为它出现的次数，因为负数的存在，所以存在不同位置有着相同的前缀和
  var map = new Map()
  // 如果出现前缀和与k相等的情况
  map.set(0, 1)
  // 前缀和
  let sum = 0
  // 出现次数
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    // 如果正好有某个位置的前缀和与当前位置的前缀和差为K
    // 则说明这个位置到当前位置中间数之和为K
    if (map.has(sum - k)) {
      // 出现几次则添加几次，因为从它们的位置出发到当前位置的和都为K
      res += map.get(sum - k)
    }
    // 存入或刷新当前的前缀和与出现次数
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
  }
  return res
};
// @lc code=end


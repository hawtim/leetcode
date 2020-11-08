/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
// sort 底层是快排O（nlogn）, 复制原数组，空间复杂度O（n）
// 时间复杂度是 O(nlogn + logn + n + n) = (n+1)logn + 2n => nlogn + n => n(logn + 1) => nlogn
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 复制
  var copy = [...nums]
  // 排序 O(NlogN）
  nums.sort(function(a, b) {
    return a - b
  })
  var len = nums.length
  var start = 0
  var end = len - 1
  // O(logN)
  while(start < end) {
    var sum = nums[start] + nums[end]
    if (sum > target) {
      end--
    } else if (sum < target) {
      start++
    } else {
      // 此时等于 target，跳出循环
      // 知道 nums 后下标分别是 start 和 end
      break
    }
  }
  // O(n)
  for (var i = 0; i < len; i++) {
    if (copy[i] === nums[start]) {
      break
    }
  }
  // O(n)
  for (var j = 0; j < len; j++) {
    // 避免重复使用下标
    if (copy[j] === nums[end] && j !== i) {
      break
    }
  }
  return [i, j]
};

// @lc code=end

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度：O(n)
// 空间复杂度O(n)
// 使用 map 结构
// 不同于Object，Map会保留所有元素的顺序。
// Map在存储大量数据的场景下表现更好，
// 尤其是在key为未知状态，并且所有key和所有value分别为相同类型的情况下。
// 这是返回下标的场景
var twoSum = function(nums, target) {
  const map = new Map()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // 如果目标值减去当前值已经在 map 中记录，
    // 那么就获取缓存中的已存值，拿到缓存的下标和当前的下标
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    // map 设置当前值及下标索引
    map.set(nums[i], i)
  }
};
// 这是返回具体数字的场景
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], nums[i]]
    } else {
      map[nums[i]] = nums[i]
    }
  }
}

// 可以用两重循环解决问题，
// 相当于虽然我在缓存里了，但是每次还是要查一遍缓存
// 上面的最终解决方案是


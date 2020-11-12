// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// 统计一个数字在排序数组中出现的次数。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

// 限制：

// 0 <= 数组长度 <= 50000

// 第一种，直接 indexOf 找到初始位和结束位，但没有意义
// 第二种，二分先找到值的位置，再左右找，时间是O(logn + n) => O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 题目关键词，排序
var search = function (nums, target) {
  var mid = findMid(nums, target)
  if (mid === -1) return 0
  // 找到中点后向两边扩散
  var left = mid - 1
  var right = mid + 1
  // 循环条件
  while (nums[left] === target || nums[right] === target) {
    if (nums[left] == target) {
      left--
    }
    if (nums[right] == target) {
      right++
    }
  }
  // return right - left + 1 - 2
  // 假设 [1, 2, 2, 2, 3, 4, 5] 索引是 [1, 3] => 3 - 1 + 1 => 出现 3 次
  // left, right 就是 [0, 4] => 4 - 0 + 1 - 2 => 出现 3 次
  // 合并加减就是 right - left - 1
  return right - left - 1
}

// 二分搜索
function findMid(nums, target) {
  var low = 0
  var high = nums.length - 1
  while (low <= high) {
    var mid = low + ((high - low) >> 1)
    if (nums[mid] < target) {
      low = mid + 1
    }
    if (nums[mid] == target) {
      return mid
    }
    if (nums[mid] > target) {
      high = mid - 1
    }
  }
  return -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 题目关键词，排序
var search = function(nums, target) {
  if (nums && nums.length > 0 && target !== null) {
    // O(2logn) => O(logn)
    var first = searchFirstRecursive(nums, target, 0, nums.length - 1)
    var last = searchLastRecursive(nums, target, 0, nums.length - 1)
    if (first !== -1 && last !== -1) {
      return last - first + 1
    }
  }
  return 0
}

// 递归版找第一个位置
var searchFirstRecursive = function (nums, target, start, end) {
  if (start > end) return -1
  var mid = Math.floor((start + end) / 2)
  if (nums[mid] === target) {
    if (nums[mid - 1] !== target) {
      return mid
    } else {
      return searchFirstRecursive(nums, target, start, mid - 1)
    }
  } else if (nums[mid] < target) {
    return searchFirstRecursive(nums, target, mid + 1, end)
  } else {
    return searchFirstRecursive(nums, target, start, mid - 1)
  }
}

// 递归版找最后一个位置
var searchLastRecursive = function (nums, target, start, end) {
  if (start > end) return -1
  var mid = Math.floor((start + end) / 2)
  if (nums[mid] === target) {
    if (nums[mid + 1] !== target) {
      return mid
    } else {
      return searchLastRecursive(nums, target, mid + 1, end)
    }
  } else if (nums[mid] < target) {
    return searchLastRecursive(nums, target, mid + 1, end)
  } else {
    return searchLastRecursive(nums, target, start, mid - 1)
  }
}

// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。



// 示例 1:

// 输入: [7,5,6,4]
// 输出: 5


// 限制：

// 0 <= 数组长度 <= 50000

/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力法求解：时间复杂度 O(n^2)，直接超时，空间复杂度 O(1)
// var reversePairs = function(nums) {
//   var cnt = 0
//   for (var i = 0; i < nums.length; i++) {
//     var cur = nums[i]
//     for (var j = i + 1; j < nums.length; j++) {
//       if (cur > nums[j]) cnt++
//     }
//   }
//   return cnt
// };

// 2. 分支思想，归并排序
// 时间复杂度 O(nlogn)，所有节点比对一次之后再二分比对
// 空间复杂度 O(logn)，主要是 res 的空间，存放二分的数据
var reversePairs = function(nums) {
  let cnt = 0
  mergeSort(nums)
  return cnt
  // https://pic.leetcode-cn.com/066bc0ae3f1c0cf4524eed4fc1efe1e4fb51b5c69a90009c7a3cd422216b5ef9-file_1584437845064

  function mergeSort(nums) {
    if (nums.length < 2) return nums
    const mid = parseInt(nums.length / 2);
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    // 每次分成两半进行排序
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    let res = []
    let llen = left.length
    let rlen = right.length
    let len = llen + rlen
    for (let index = 0, i = 0, j = 0; index < len; index++) {
      if (i >= llen) {
        res[index] = right[j++]
      } else if (j >= rlen) {
        res[index] = left[i++]
      } else if (left[i] <= right[j]) {
        res[index] = left[i++]
      } else {
        res[index] = right[j++]
        cnt += llen - i // 在归并排序中加上唯一的代码
      }
    }
    return res
  }
}
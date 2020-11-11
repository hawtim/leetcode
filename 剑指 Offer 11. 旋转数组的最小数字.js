// 剑指 Offer 11. 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0
// 注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
// 其实不同，直接难度不一样，思路差不多
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  if (!numbers.length) return 0
  let low = 0
  let high = numbers.length - 1
  while (low < high) {
    var mid = low + ((high - low) >> 1)
    // 出现这种情况类似 [3, 4, 5, 6, 0, 1, 2],此时最小值一定在右边
    if (numbers[mid] > numbers[high]) {
      low = mid + 1
      // 出现这种情况类似 [1, 0, 1, 1, 1] 或者 [1, 1, 1, 0, 1] 此时最小数字方向不好判断，只能 high = high - 1
    } else if (numbers[mid] == numbers[high]) {
      high = high - 1
    } else {
      // numbers[mid] < numbers[high], 出现这种情况，类似 [2, 3, 4, 5, 6]，此时最小值一定在左边
      high = mid
    }
  }
  // 最后返回最小值
  return numbers[low]
};
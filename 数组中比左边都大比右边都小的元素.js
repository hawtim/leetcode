// 使用变量求解：
// （1）目前找到符合题意的候选值，candidate
// （2）目前已遍历数组的最大值， max ：为了选下一次的候选值
// （3）目前的候选值是否有效， isExist ：检测是否需要重新选择候选值

// 思路：如果候选值有效，可以继续遍历下面的数据
// 如果候选值小于目前的值，则该候选失效。之后遍历元素时，就要重新选择候选值
// 选择候选值时，对于某一个元素，如果该元素比之前遍历过元素的最大值还要大 max，则该元素就为候选。
// 复杂度：遍历一遍数组即可，时间：O（n），空间O（1）

// 找出一个数满足条件的
function FindNum(nums) {
  if (!nums) return []
  var pos = 0
  // 目前找到符合题意的候选值，初始值是第一个数字
  var candidate = nums[0]
  // 目前已遍历数组的最大值
  var max = nums[0]
  // 目前的候选值是否有效
  var isExist = true
  for (var i = 1; i < nums.length; i++) {
    if (isExist) {
      // 也就是右侧有比当前候选值小的数字
      if (candidate > nums[i]) {
        isExist = false
      } else {
        max = nums[i]
      }
    } else {
      // 如果当前值比遍历过程中的最大值大，则作为候选值，
      if (nums[i] >= max) {
        isExist = true
        candidate = nums[i]
        max = nums[i]
        pos = i
      }
    }
  }
  return isExist ? pos : -1
}

var nums = [1, 2, 3, 1, 2, 0, 5, 6]

console.log(FindNum(nums))

// 找出所有满足条件的


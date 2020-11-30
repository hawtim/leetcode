// 快排的实现
// 递归实现，最好 及 平均 O(nlogn)，多数情况下小于 O(nlogn), 最差 O(n^2)
// 空间 O(logn)
// function quickSort(nums) {
//   if (nums.length < 2) return nums
//   var target = nums[0]
//   var left = []
//   var right = []
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < target) {
//       left.push(nums[i])
//     } else {
//       right.push(nums[i])
//     }
//   }
//   return quickSort(left).concat([target], quickSort(right))
// }

// 递归实现，无需额外空间
function quickSort(nums, start, end) {
  if (end - start < 1) return
  var target = nums[start]
  var left = start
  var right = end
  while (left < right) {
    // 如果右侧的值大于 target，则 r--
    while (left < right && nums[right] >= target) {
      right--
    }
    // 直到找到右侧小于 target 的值 nums[right]，并将其赋值到 nums[left]
    nums[left] = nums[right]
    // 如果左侧的值小于 target，则 l++
    while (left < right && nums[left] < target) {
      left++
    }
    // left++ 直到找到左侧大于 target 的值 nums[left]，并将其赋值到 nums[right]
    nums[right] = nums[left]
  }
  nums[left] = target
  quickSort(nums, start, left - 1)
  quickSort(nums, left + 1, end)
  return nums
}


var temp = [1, 2, 4, 5, 6, 63, 3, 5, 3, 3, 5, 5, 6, 77, 5, 7, 643, 4, 544, 2]
var arr = quickSort(temp, 0, temp.length - 1)
console.log("🚀 ~ file: Untitled-1 ~ line 18 ~ arr", arr)

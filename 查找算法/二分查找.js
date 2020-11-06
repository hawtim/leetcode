// 只对有序的数据集有效
// 1. 数组的第一个位置设置为下边界
// 2. 数组的最后一个位置设置为上边界
// 3. 若下边界等于上边界，则做如下操作
// a. 将中点设置为 上边界加下边界 除以 2
// b. 如果中点元素小于查询值，则将下边界设置为中点元素所在下标 + 1
// c. 如果中点元素大于查询值，则将上边界设置为中点元素所在下标 - 1
// d. 否则中点元素即为要查找的数据
// 时间复杂度为 O(logn)
// 多个数据重复的情况下，会是居中的那个
function binSearch(arr, data) {
  var upBound = arr.length - 1
  var lowBound = 0
  while (lowBound <= upBound) {
    var mid = Math.floor((upBound + lowBound) / 2)
    if (arr[mid] < data) {
      lowBound = mid + 1
    } else if (arr[mid] > data) {
      upBound = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binSearch([1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

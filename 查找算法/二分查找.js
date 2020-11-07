// 只对有序线性表有效
function binarySearchRecursive(data, arr, start, end) {
  if (start > end) return -1
  // 取中点值
  var mid = Math.floor((end + start) / 2)
  // 刚好等于中位数
  if (data === arr[mid]) {
    return mid
  }
  // 大于，递归左边
  if (data < arr[mid]) {
    return binarySearchRecursive(data, arr, start, mid - 1)
  }
  // 小于，中点右移一位，递归，因为上面判断了是否和中点想等，不等肯定不用再比较了
  if (data > arr[mid]) {
    return binarySearchRecursive(data, arr, mid + 1, end)
  }
}

// 非递归写法
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
function binarySearch(data, arr) {
  // 是索引值
  var end = arr.length - 1
  var start = 0
  while (start <= end) {
    var mid = Math.floor((end + start) / 2)
    if (data === arr[mid]) {
      return mid
    }
    if (data < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

var arr = [0, 1, 1, 1, 1, 1, 4, 6, 7, 8]
console.log(binarySearch(4, arr));
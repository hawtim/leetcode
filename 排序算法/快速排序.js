// 快速排序是处理大数据集最快的排序算法之一。
// 它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列

// 一个元素作为基准值（pivot）
function quickSort(arr) {
  if (arr.length < 2) return arr
  var lesser = []
  var greater = []
  var pivot = list[0]
  for (var i = 0; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i])
    } else {
      greater.push(list[i])
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater))
}

// 时间复杂度平均为 (2n + 2)logn => O(nlogn)
// 最差为 1/2n^2 => O(n^ 2) （正序或者逆序的数组）
// 多数情况下为小于 nlogn。

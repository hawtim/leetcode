// 快速排序是处理大数据集最快的排序算法之一。
// 它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列

// 一个元素作为基准值（pivot）

function quickSort(arr) {
  if (!arr.length) return []
  var lesser = []
  var greater = []
  var pivot = list[0]
  for (var i = 0; i < list.length; i ++) {
    if (list[i] < pivot) {
      lesser.push(list[i])
    } else {
      greater.push(list[i])
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater))
}
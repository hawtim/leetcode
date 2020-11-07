// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

//  

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
//  

// 限制：

// 1 <= target <= 10^5

// 大小指针的思路：同侧出发的双指针
// 创建一个容器child，用于表示当前的子序列，初始元素为1,2
// 记录子序列的开头元素small和末尾元素big
// big 向右移动子序列末尾增加一个数 small向右移动子序列开头减少一个数
// 子序列的和小于目标值，big 向右移动，当子序列的和大于目标值，small 向右移动

/**
 * @param {number} sum
 * @return {number[][]}
 */
var findContinuousSequence = function(sum) {
  var result = []
  var child = [1, 2]
  var small = 1
  var big = 2
  var currentSum = 3
  while (big < sum) {
    // 子序列的和小于目标值，big 向右移动
    while(currentSum < sum && big < sum) {
      ++big // big 右移一位
      child.push(big)
      currentSum += big // 加上下一个数字
    }
    // 当子序列的和大于目标值，small向右移动
    while (currentSum > sum && small < big) {
      child.shift()
      currentSum -= small // 移除第一个数字
      small++ // small 也右移一位
    } 
    // 如果满足条件并且子序列长度大于 1，且必须是两个数字组成，不然比如 10 会得到 [[1, 2, 3, 4], [10]]
    if (currentSum === sum && child.length > 1) {
      // 复制当前子序列到结果数组中
      result.push(child.slice())
      // big 继续右移，寻找下一组可能，
      // 加上 big 之后，如果 big 小于 sum ，进入下一轮循环，检查当前 currentSum 是否大于目标 sum，小于的话， big 继续右移并加值，大于的话，small 端减去最小的值并且 small 右移
      ++big
      child.push(big)
      currentSum += big
    }
  }
  return result
};
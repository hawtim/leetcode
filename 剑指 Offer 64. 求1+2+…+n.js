// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

//  

// 示例 1：

// 输入: n = 3
// 输出: 6
// 示例 2：

// 输入: n = 9
// 输出: 45
//  

// 限制：

// 1 <= n <= 10000

/**
 * @param {number} n
 * @return {number}
 */

// 使用递归内存消耗会大，时间开销上相差不大
var sumNums = function(n) {
  return (Math.pow(n, 2) + n) >> 1
  // 等同于
  // return (Math.pow(n, 2) + n) / 2
};
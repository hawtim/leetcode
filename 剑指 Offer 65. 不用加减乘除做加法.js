// 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

//  

// 示例:

// 输入: a = 1, b = 1
// 输出: 2
//  

// 提示：

// a, b 均可能是负数或 0
// 结果不会溢出 32 位整数


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 1.不进位相加
// 2.计算进位
// 3.进位与不进位结果进行相加
// 重复这三步，直到进位值为0

// var add = function(a, b) {
//   if (b === 0) return a
//   return add(a^b, (a & b) << 1)
// };

var add = function(a, b) {
  while (b !== 0) {
    var excl = a ^ b
    var carry = (a & b) << 1
    a = excl
    b = carry
  }
  return a
}
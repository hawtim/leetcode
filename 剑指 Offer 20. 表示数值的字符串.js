// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {boolean}
 */
// var isNumber = function (s) {
//   var regexp = /[+-]^[0-9]+[e|.]?[+-]?[0-9]+/gi
//   return s.match(regexp)
// }

/**
 * @param {string} s
 * @return {boolean}
 */

// 利用 Number 构造函数，帮你判断是不是数字
var isNumber = function(s) {
  return s.replace(/\s/g, '') && !isNaN(Number(s))
};

// !!!考虑所有的情况，这种方式不合适，非常耗时，而且所有的情况基本都是靠修补(未完成)
// 1.只能出现数字、符号位、小数点、指数位
// 2.小数点，指数符号只能出现一次、且不能出现在开头结尾(可以出现在开头和结尾)
// 3.指数位出现后，小数点不允许在出现
// 4.符号位只能出现在开头和指数位后面
// 5. 中间不能包含空格
// var isNumber = function (s) {
//   if (!s || !s.trim()) return false
//   let hasDot = false
//   let hasE = false
//   let hasNum = false
//   let hasOp = false
//   s = s.trim()
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]
//     switch (true) {
//       // 前后已经 trim 掉了，中间包含空格肯定不是数字
//       case (char === ' '):
//         return false
//       case (char.match(/[a-zA-Z]/) && char.toLowerCase() !== 'e'):
//         return false
//       case (char >= 0 && char <= 9):
//         hasNum = true
//         continue
//       case (char.toLowerCase() === 'e'):
//         if (hasE || hasDot || i === 0 || i === s.length - 1 || !hasNum) {
//           return false
//         } else {
//           hasE = true
//           continue
//         }
//       case (char === '.'):
//         if (hasDot || hasE || s.length === 1 || i === s.length - 1 && !hasNum) {
//           return false
//         } else {
//           hasDot = true
//           continue
//         }
//       case (char === '-' || char === '+'):
//         if (i === 0 || s[i - 1].toLowerCase() === 'e' && i !== s.length - 1) {
//           hasOp = true
//           continue
//         } else {
//           return false
//         }
//     }
//   }
//   return true
// }

console.log("isNumber(\".1\")", isNumber(". 1"))
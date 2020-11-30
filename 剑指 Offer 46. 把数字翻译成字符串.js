// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

//  

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
//  

// 提示：

// 0 <= num < 231

/**
 * @param {number} num
 * @return {number}
 */
// 类似青蛙跳的一次跳一格和一次跳两格
var translateNum = function(num) {
  var str = String(num)
  var dp = []
  dp[0] = dp[1] = 1
  // i == str.length，因为每次截取的是两个数字，所以必须留多一位
  for (var i = 2; i <= str.length; i++) {
    var temp = str.substring(i - 2, i)
    // 大于 10 的数字可以分为两种情况 
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[dp.length - 1]
};
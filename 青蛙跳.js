// 问题描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 1. 定义数组元素的含义： 跳上一个 i 级的台阶总共有 dp[i] 种跳法
// 2. 找出数组元素间的关系式：
// 青蛙到达第 n 级的台阶有两种方式
// 一种是从第 n-1 级跳上来
// 一种是从第 n-2 级跳上来
//  dp[n] = dp[n-1] + dp[n-2]
// 3. 找出初始条件

function jumpWayOfStage(n) {
  if (n <= 1) {
    return n
  }
  var dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log(dp)
  return dp[n]
}
console.log(jumpWayOfStage(3))

function dynFib(n) {
  var val = []
  // 定义数组元素的含义
  for (var i = 0; i <= n; ++i) {
    val[i] = 0
  }
  // 找出初始条件
  if (n == 1 || n == 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 2
    for (var i = 3; i <= n; ++i) {
      // 找出数组元素间的关系式
      val[i] = val[i - 1] + val[i - 2]
    }
    return val[n - 1]
  }
}

// 在 fib 30 的时候，和递归版本差距很大
// 递归版本
function recurFib(n) {
  if (n < 2) return n
  return recurFib(n - 1) + recurFib(n - 2)
}

// 递归加记忆化
var memoRecurFib = (function() {
  var memo = {}
  return function (n) {
    if (n < 2) return n // 终止条件
    if (memo[n - 1] == undefined) {
      memo[n - 1] = memoRecurFib(n - 1)
    }
    if (memo[n - 2] == undefined) {
      memo[n - 2] = memoRecurFib(n - 2)
    }
    return memo[n] = memo[n - 2] + memo[n - 1]
  }
})()

console.log(memoRecurFib(10))

// 迭代版本
function iterFib(n) {
  var last = 1
  var nextLast = 1
  var result = 1
  for (var i = 2; i < n; ++i) {
    result = last + nextLast
    nextLast = last
    last = result
  }
}

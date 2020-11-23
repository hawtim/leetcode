var str = '123456789'

// 方案一: 用栈或者队列，可以通过修改代码支持小数点的数字
var splitThousand = function (str) {
  // 比如判断数字是否符合数字规范等等
  var str = str.trim()
  var len = str.length
  if (len <= 3) return str
  var stack = []
  var count = 0
  for (var i = str.length - 1; i >= 0; i--) {
    stack.push(str[i])
    if (++count === 3 && i !== 0) {
      stack.push(',')
      count = 0
    }
  }
  return stack.reverse().join('')
}

console.log(splitThousand(str))

// 方案二：用正则表达式，也可以通过修改正则表达式支持小数点
var splitThousand = function (str) {
  // 可以使用非捕获元字符 ?:、?= 或 ?! 来重写捕获
  var regexp = /(\d)(?=(?:\d{3})+$)/g
  return str.replace(regexp, '$1,')
}
console.log(splitThousand(str))

var cardSplit = function (str) {
  var regexp = /(\d)(?=(?:\d{4})+$)/g
  return str.replace(regexp, '$1 ')
}

console.log(cardSplit(str))
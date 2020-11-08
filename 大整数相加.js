// 考察栈，队列
// 数组操作

// shift pop 分别移除第一个和最后一个
// unshift 插入第一个 push 插入最后一个
// 所以 shift 和 unshift 实现先进先出 队列
// push 和 pop 实现先进后出/后进先出 栈的结构
function bigAdd(str1, str2) {
  // reverse 之后形成一个队列的结构，先进先出
  var queue1 = str1.split('').reverse()
  var queue2 = str2.split('').reverse()
  // 维护一个存结果的数组
  var sumArr = []
  var rest = 0
  var maxlen = Math.max(queue1.length, queue2.length)
  for (var i = 0; i < maxlen; i++) {
    // 这个是取出第一个
    var value1 = queue1.shift()
    var value2 = queue2.shift()
    var sum = addValue(value1, value2, rest)
    if (sum >= 10) {
      sum = sum - 10
      rest = 1
    } else {
      sum = sum
      rest = 0
    }
    // 避免最后再 reverse 一下
    sumArr.unshift(sum)
  }
  if (rest === 1) {
    sumArr.unshift(rest)
  }
  return sumArr.join('')
}

function addValue(str1, str2, rest) {
  const temp1 = str1 ? Number(str1) : 0
  const temp2 = str2 ? Number(str2) : 0
  return temp1 + temp2 + rest
}

console.log(bigAdd('99999', '1'))
// 栈和列表类似的数据结构，但它比列表要高效
// 数据只能在栈顶添加或删除，所以操作很快

// 特性 后入先出 last in first out
// 主要操作 压栈和出栈

// pop 方法会修改栈，使用 peek 只返回栈顶元素而不删除它

function pop() {
  return this.dataStore[--this.top]
}

function peek() {
  return this.dataStore[this.top - 1]
}

function push(element) {
  this.dataStore[this.top++] = element
}

function length() {
  return this.top
}

function clear() {
  this.top = 0
}

function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.clear = clear
}

// test code

// var s = new Stack()
// s.push('david')
// s.push('ray')
// console.log(s.length())
// console.log(s.peek())

// peek for a empty stack will get undefined

// 数制之间的互相转换，适合基数 2 - 9
function mulBase(num, base) {
  var s = new Stack()
  do {
    // 最高位为 num % base
    s.push(num % base)
    console.log(s)
    // 使用n/b代替n
    num = Math.floor(num /= base)
    // 重复步骤1和2，直到n等于0，且没有余数。
  } while (num > 0)
  var converted = ''
  while (s.length() > 0) {
    // 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符串形式。
    converted += s.pop()
  }
  return converted
}

var newNum = mulBase(32, 2)
console.log(newNum)

// 回文
function isPalindrome(word) {
  var s = new Stack()
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  var rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word == rword) return true
  return false
}

console.log(isPalindrome('racecar'))

// 递归模拟

function factorial(n) {
  var s = new Stack()
  while (n > 1) {
    s.push(n--)
  }
  var result = 1
  while (s.length() > 0) {
    result *= s.pop()
  }
  return result
}
console.log(factorial(5))


// pratice



module.exports = Stack
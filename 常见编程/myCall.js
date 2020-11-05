// context 如果是 null 或者 undefined 之类的，指向全局指针，因为 call 传入的是多个参数，将其转化为数组形式

/**
 * 假设
var obj = {
  a: 1
}
global.a = 2
请手写一个 call 函数实现原生 call 函数的功能
 */

Function.prototype.myCall = function (context = globalThis, ...args) {
  // 判断当前this是否为函数，防止Function.prototype.myCall() 直接调用
  // 把参数全部转成数组
  if (this === Function.prototype) return undefined
  // context 的默认值为 global 指针，比如传 falsy 值的时候
  context = context || globalThis
  // 为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性
  const fn = Symbol()
  context[fn] = this

  /*
  context[fn] = this
  等同于
  obj[fn] = test() {
    console.log(this.a)
    console.log(arguments)
  }
  obj.test()
  */
  // 再把参数展开输送回去
  const result = context[fn](...args)
  // 调用函数后即删除该Symbol属性
  delete context[fn]
  return result
}



// myCall test
var obj = {
  a: 1
}

global.a = 2

function test() {
  console.log(this.a)
  console.log(arguments)
}

obj.test = test
obj.test([2, 3, 4])

test.myCall(obj, [2, 3, 4])
test()

console.log(Function.prototype.myCall())

test.call(obj, [2, 3, 4])
test.call(obj, 2, 3, 4)

// myCall test
Function.prototype.myApply = function (context = globalThis, args) {
  if (this === Function.prototype) return undefined
  context = context || globalThis
  const fn = Symbol()
  context[fn] = this
  let result
  // 只接一个参数，类型是数据，如果是数组就展开，不是就置空，原生会报错
  if (Array.isArray(args)) {
    result = context[fn](...args)
  } else {
    // CreateListFromArrayLike called on non-object
    result = context[fn]()
  }
  delete context[fn]
  return result
}


// myApply test

var obj2 = {
  b: 1
}

global.b = 2

function test2() {
  console.log(this.b)
  console.log(arguments)
}

// test2.myApply(obj2, 2, 3, 4) // Error CreateListFromArrayLike called on non-object

test2.apply(obj2, [2, 3, 4])

// myApply test
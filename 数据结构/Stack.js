// 基于原型的类能节省内存空间并在扩展方面优于基于函数的类

// 基于数组实现的 stack 类

// class Stack {
//   constructor() {
//     this.items = []
//   }
//   push(element) {
//     this.items.push(element)
//   }
//   pop() {
//     return this.items.pop()
//   }
//   peek() {
//     return this.items[this.items.length - 1]
//   }
//   isEmpty() {
//     return this.items.length === 0
//   }
//   clear() {
//     this.items = []
//   }
//   size() {
//     return this.items.size
//   }
// }

// 基于对象实现的 stack 类

class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  // 取出第一个
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    // 因为从 0 开始
    this.count--
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  size() {
    return this.count
  }
  // 复杂度 O(N)
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

let stack = new Stack()
stack.push(4)
stack.push(3)
stack.push(2)

console.log(stack)

console.log(stack.toString())
// 基于数组和基于对象的 stack 真的没有性能差异吗？

// 获取元素的时候更加高效？

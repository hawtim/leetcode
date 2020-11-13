// 双端队列的实现

class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  addFront(element) {
    // 三种情况，
    // 1、队列空
    // 2、 lowestCount 不是 0
    // 3、lowestCount 是 0，需要将后面所有元素后移以为
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        // this.items[i] 还是空的
        this.items[i] = this.item[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[this.lowestCount] = element
    }
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) return undefined
    const item = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return item
  }
  removeBack() {
    if (this.isEmpty()) return undefined
    const item = this.items[this.count]
    delete this.items[this.count]
    this.count--
    return item
  }
  peekFront() {
    return this.items[this.lowestCount]
  }
  peekBack() {
    return this.items[this.count]
  }
  size() {
    return this.count - this.lowestCount
  }
  isEmpty() {
    return this.size() === 0
  }
  toString() {
    if (this.isEmpty()) return ''
    let str = `${this.items[this.lowestCount]}`
    // this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      // 从最前端的索引开始循环
      str += `, ${this.items[i]}`
    }
    return str
  }
}


// const deque = new Deque()

// console.log(deque.isEmpty())
// deque.addBack('John')
// deque.addBack('xxx')
// console.log(deque.toString())

// deque.addBack('Camila')
// console.log(deque.toString())
// console.log(deque.size())
// console.log(deque.isEmpty())

// deque.removeFront()
// console.log(deque.toString())

// deque.removeBack()
// console.log(deque.toString())

// deque.addFront('John')

// console.log(deque.toString())

module.exports = Deque
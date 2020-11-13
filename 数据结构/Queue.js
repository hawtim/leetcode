class Queue {
  constructor() {
    this.count = 0 // 控制队列大小
    this.lowestCount = 0 // 控制队列的第一个元素的索引
    this.items = {} // 为了在获取元素的时候更高效，使用对象来存储
  }
  // 从队列末端添加
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  //从队列前端移除
  dequeue() {
    // 检查队列是否为空
    if (this.isEmpty()) {
      return undefined
    }
    const item = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return item
  }
  peek() {
    return  this.items[this.lowestCount]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
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


// const queue = new Queue()
// queue.enqueue('John')
// queue.enqueue('Jack')
// queue.enqueue('Alice')
// queue.enqueue('Axx')


// console.log(queue)
// console.log(queue.toString())


module.exports = Queue
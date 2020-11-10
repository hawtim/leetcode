// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

// 示例 1：

// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
// 示例 2：

// 输入: 
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]
//  

// 限制：

// 1 <= push_back,pop_front,max_value的总操作数 <= 10000
// 1 <= value <= 10^5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 相当于实现最大队列，使用双端队列实现，双端队列是左右均可进出的
class MaxQueue {
  constructor() {
    this.queue1 = []
    // 维护最大值
    this.queue2 = []
  }
  max_value() {
    if (!this.queue1.length) return -1
    return this.queue2[0]
  }
  push_back(value) {
    this.queue1.push(value)
    // 这一行真的很精妙，一直把尾部所有小于当前值的全部退出去，这是 O(n)， 平均每操作一个为 O(1)
    while (this.queue2.length && this.queue2[this.queue2.length - 1] < value) {
      this.queue2.pop()
    }
    // 否则就传入比他小的值，这样当头部移出的时候，这个队列仍然有最大值
    this.queue2.push(value)
  }
  pop_front() {
    if (!this.queue1.length) return -1
    const value = this.queue1.shift()
    if (value === this.queue2[0]) {
      this.queue2.shift()
    }
    return value
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
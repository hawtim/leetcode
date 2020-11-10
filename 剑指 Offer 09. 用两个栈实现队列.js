// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

//  

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]
// 提示：

// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用

// 执行用时： 368 ms , 在所有 JavaScript 提交中击败了 99.94% 的用户
// 内存消耗： 49.7 MB , 在所有 JavaScript 提交中击败了 17.87% 的用户

var CQueue = function() {
  this.stack = []
  this.reverseStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  // 直接进栈就行
  this.stack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 当反序栈清空时，再把正序栈 stack 的值全部 pop 进来（即数组尾部，栈顶取出）
  if (this.reverseStack.length === 0) {
    while (this.stack.length) {
      this.reverseStack.push(this.stack.pop())
    }
  }
  return this.reverseStack.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
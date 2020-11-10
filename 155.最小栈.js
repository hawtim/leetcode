/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (52.26%)
 * Likes:    720
 * Dislikes: 0
 * Total Accepted:    175.6K
 * Total Submissions: 315.7K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 *
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 *
 *
 *
 *
 * 示例:
 *
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 *
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 *
 *
 *
 * 提示：
 *
 *
 * pop、top 和 getMin 操作总是在 非空栈 上调用。
 *
 *
 */
// 同 剑指 Offer 30. 包含min函数的栈 ，leetcode 的方法名叫 getMin，剑指用 min
// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  var min = this.getMin()
  console.log(min)
  if (this.minStack.length === 0 || x <= min) {
    this.minStack.push(x)
  } else {
    this.minStack.push(min)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop()
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  var length = this.stack.length - 1
  if (length >= 0) {
    return this.stack[length]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var length = this.minStack.length - 1
  if (length >= 0) {
    return this.minStack[length]
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// @lc code=end

// var minStack = new MinStack()
// console.log(minStack)

// minStack.push(1)
// minStack.push(2)
// minStack.push(3)
// minStack.push(4)

// console.log(minStack)
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (68.26%)
 * Likes:    1322
 * Dislikes: 0
 * Total Accepted:    366.4K
 * Total Submissions: 516.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 两种迭代法，第一种借助外部空间 O(n)，第二种借助外部空间 O(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 方案一，更好理解
  var stack = []
  // 临时的链表头
  let thead = new ListNode(0);
  let pre = thead
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  while(stack.length) {
    pre.next = new ListNode(stack.pop())
    // pre 的指针指向了新的节点
    pre = pre.next
  }
  // 返回临时链表头的下个位置，即我们自己添加上的位置
  return thead.next
};

var reverseList = function (head) {
  // 方案二，较难理解，效率更高
  var currentNode = null
  var headNode = head // 保留基准节点的引用
  // 循环这里的 head 没有被改变
  while (head && head.next) {
    currentNode = head.next
    head.next = currentNode.next // head.next = head.next.next
    currentNode.next = headNode // head.next = head（原始 head）
    headNode = currentNode // 这个 currentNode 成为新的链表头
  }
  return headNode
}

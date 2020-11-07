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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
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


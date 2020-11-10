/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (47.78%)
 * Likes:    423
 * Dislikes: 0
 * Total Accepted:    50.8K
 * Total Submissions: 87.5K
 * Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
 *
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 
 * 要求返回这个链表的 深拷贝。 
 * 
 * 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * 
 * 
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 
 * 示例 4：
 * 
 * 输入：head = []
 * 输出：[]
 * 解释：给定的链表为空（空指针），因此返回 null。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -10000 <= Node.val <= 10000
 * Node.random 为空（null）或指向链表中的节点。
 * 节点数目不超过 1000 。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// 1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N,把N直接放在N的next位置，让复制后的链表和原始链表组成新的链表。
// 2.给复制的链表random赋值，即N.random=N.random.next。
// 3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。

var copyRandomList = function(head) {
  if (head === null) return null
  cloneNodes(head)
  cloneRandomNodes(head)
  return reconnectNodes(head)
};

function cloneNodes(head) {
  var current = head
  while (current) {
    var cloneNode = {
      val: current.val,
      next: current.next
    }
    current.next = cloneNode
    current = cloneNode.next
  }
}

function cloneRandom(head) {
  var current = head;
  while (current) {
    var cloneNode = current.next;
    if (current.random) {
      cloneNode.random = current.random.next;
    } else {
      cloneNode.random = null;
    }
    current = cloneNode.next;
  }
}

function reconnectNodes(head) {
  var cloneHead = head.next;
  var cloneNode = head.next;
  var current = head;
  while (current) {
    current.next = cloneNode.next;
    current = cloneNode.next;
    if (current) {
      cloneNode.next = current.next;
      cloneNode = current.next;
    } else {
      cloneNode.next = null;
    }
  }
  return cloneHead;
}

// @lc code=end


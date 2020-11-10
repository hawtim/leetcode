// 编写一个函数，检查输入的链表是否是回文的。

//  

// 示例 1：

// 输入： 1->2
// 输出： false 
// 示例 2：

// 输入： 1->2->2->1
// 输出： true 
//  

// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var arr = []
  var current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  if (arr.length % 2 == 0) {
    var mid = arr.length / 2
    return arr.slice(0, mid).join('') == arr.slice(mid).reverse().join('')
  } else {
    var mid = Math.floor((arr.length - 1) / 2)
    return arr.slice(0, mid).join('') == arr.slice(mid + 1).reverse().join('')
  }
};
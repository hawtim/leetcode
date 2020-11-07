// 1.后序遍历：从左到右，左子树，右子树，根节点
// 2.先检测左子树，左侧比跟节点小的值都判定为左子树，找到临界值
// 3.除最后一个节点外和左子树外的其他值为右子树，右子树有一个比跟节点小，则返回false。
// 4.若存在，左、右子树，递归检测左、右子树是否复合规范。

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  var len = postorder.length
  if (!len || len < 2) return true
  // 获取跟节点
  var root = postorder[len - 1]
  // 先找出左和右的临界值
  for (var i = 0 ; i < len - 1; i++) {
    if (postorder[i] > root) {
      break // 找出临界值
    }
  }
  // 将 i 转移到第二次循环
  for (var j = i; j < len - 1; j++) {
    // 检查右子树中有没有小于根节点的值，如果有则不满足条件 false
    if (postorder[j] < root) return false
  }
  // 递归检查左右子树
  var left = true
  if (i > 0) {
    left = verifyPostorder(postorder.slice(0, i))
  }
  var right = true
  if (i < len - 1) {
    right = verifyPostorder(postorder.slice(i, len - 1))
  }
  // 联合判断
  return left && right
};
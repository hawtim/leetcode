// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

//  

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回：

// [3,9,20,15,7]
//  

// 提示：

// 节点总数 <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS 广度优先遍历，先进先出，使用队列实实现
const levelOrder = function(root) {
  const result = []
  const queue = []
  if (root) {
    queue.push(root)
    while(queue.length) {
      const { left, right, val } = queue.shift()
      if (left) queue.push(left)
      if (right) queue.push(right)
      result.push(val)
    }
  }
  return result
};
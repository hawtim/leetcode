/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = (root, sum) => {
  // 1. 设置结果集
  const result = [];
  // 2. 深度优先搜索：root -> 树；path -> 路径；treeSum -> 当前路径和
  const recursion = (node, path, treeSum) => {
    // 2.1 终止条件，初始判断也是终止条件
    if (!node) {
      return;
    }
    // 2.2 路径添加一个元素
    path.push(node.val);
    // 2.3 计算当前路径总和
    treeSum += node.val;
    // 2.4 如果没有左子树和右子树（叶子节点）
    if (!node.left && !node.right) {
      // 2.5 如果结果等于目标结果
      if (treeSum === sum) {
        result.push(path.slice());
      }
    } else {
      // 2.6 进一步递归左子树和右子树
      recursion(node.left, path, treeSum);
      recursion(node.right, path, treeSum);
    }
    // 2.7 回溯，发现这条路径不对，往回退一步。
    // 如果这条路径对了，在 2.4 的时候就拷贝到 result 数组中了
    path.pop();
  };
  // 执行
  recursion(root, [], 0);

  // 3. 返回结果
  return result;
};

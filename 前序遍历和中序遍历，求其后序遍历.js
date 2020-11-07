function getPostOrder(preorder, inorder) {
  if (!preorder) return ''
  if (preorder.length === 1) return preorder
  // 这部分的逻辑跟重建二叉树一致
  const root = preorder[0]
  const index = inorder.indexOf(root)
  const inLeft = inorder.slice(0, index)
  const inRight = inorder.slice(index+1)
  const preLeft = preorder.slice(1, index+1)
  const preRight = preorder.slice(index + 1)
  // 最终后序 是 左子树 + 右子树 + 根节点
  return getPostOrder(preLeft, inLeft) + getPostOrder(preRight, inRight) + root
}

console.log("getPostOrder('ABC', 'BAC')", getPostOrder('ABC', 'BAC'))
console.log("getPostOrder('FDXEAG', 'XDEFAG')", getPostOrder('FDXEAG', 'XDEFAG'))

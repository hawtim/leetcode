var preorderTraversal = function (root) {
  var res = []
  if (!root) return res
  var stack = []
  while (root) {
    while (root) {
      res.push(root.val)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
}
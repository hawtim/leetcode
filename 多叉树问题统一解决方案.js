// 遍历

function solution(nums) {
  // 创建一个结果空间
  var result
  // 遍历树
  function traverseTree(node) {
    if (!node) return
    traverseNode(node)
    if (node.children && node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i])
      }
    }
  }
  function traverseNode(node) {
    result += node.value
  }
  traverseTree(nums)
  return result
}
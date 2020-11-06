const node = {
  value: 10,
  children: [{
      value: 1,
      children: [{
          value: 12
        },
        {
          value: 14
        }
      ]
    },
    {
      value: 20,
      children: [{
        value: 15,
        children: [
          {
            value: 17
          }
        ]
      }, {
        value: 16
      }]
    }
  ]
};

// 把题干可以看成一个多叉树，每个节点下可能有超级多的子节点，那么每个节点都要便利一遍
// 所以时间复杂度是 O(n)
// 空间复杂度是 O(n)
// 深度优先搜索
function dfs(node) {
  if (node === null) return 0
  let sum = node.value
  let children = node.children
  if (!children || children.length === 0) return sum;
  for (let i = 0; i < children.length; i++) {
    sum += dfs(children[i])
  }
  return sum
}

console.log(dfs(node))



const node = {
  value: 10,
  children: [
    {
      value: 1,
      children: [
        {
          value: 12
        },
        {
          value: 14
        }
      ]
    },
    {
      value: 20,
      children: [
        {
          value: 15,
          children: [
            {
              value: 17
            }
          ]
        },
        {
          value: 16
        }
      ]
    }
  ]
}

// 把题干可以看成一个多叉树，每个节点下可能有超级多的子节点，
// 那么每个节点都要遍历一遍，相当于每个节点访问一次，时间复杂度是 O(n)，空间复杂度是 O(n)
// 深度优先搜索
function getSum(node) {
  if (node === null) return 0
  let sum = node.value
  let children = node.children
  if (!children || children.length === 0) return sum
  // 每个节点下的 children 可能有多个，每一个都要递归一遍
  for (let i = 0; i < children.length; i++) {
    sum += getSum(children[i])
  }
  return sum
}

console.log(getSum(node))

// function getSum(node, temp = []) {
//   if (node === null) return 0
//   temp.push(node.value)
//   let children = node.children
//   if (!children || children.length === 0) return ''
//   // 每个节点下的 children 可能有多个，每一个都要递归一遍
//   for (let i = 0; i < children.length; i++) {
//     temp.push(getSum(children[i]), temp)
//   }
//   return temp
// }

// console.log(getSum(node, []))

function traverseTree(node) {
  if (!node) return
  traverseNode(node)
  if (node.children && node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      traverseTree(node.children[i])
    }
  }
}
var temp = 0
function traverseNode(node) {
  temp += node.value
}

console.log(temp)

function nSum() {
  // 多叉树遍历
  function traverseTree(node) {
    if (!node) return
    traverseNode(node)
    if (node.children && node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i])
      }
    }
  }
  var temp = 0
  function traverseNode(node) {
    temp += node.value
  }
  traverseTree(node)
  return temp
}



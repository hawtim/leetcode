// 树是计算机科学中经常用到的一种数据结构。
// 一种非线性的数据结构，以分层的方式存储数据。
// 树被用来存储具有层级关系的数据、有序列表

// 二叉树的查找（比链表快），添加或删除元素（比数组快）

// 最上面为根节点，一个节点下面连接多个节点，那么称为父节点，称为子节点。
// 一个节点可以有 0， 1， 或多个子节点，没有任何子节点的节点称为叶子节点。

// 二叉树是特殊的树，子节点个数不超过两个。
// 相对较小的值保存在左节点，较大的值保存在右节点。
// 这使得查找效率很高，对于数值和字符串类型的数据都很快。

function Node(data, left, right) {
  this.data = data
  this.left = left
  this.count = 1
  this.right = right
  this.show = show
}

function show() {
  return this.data
}

// Node 对象既保存 数据，也保存和其他节点的链接，
// show 方法用来显示保存在节点中的数据

function BST() {
  // 表示根节点的 node 对象，传入 null，来创建一个空节点
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
  this.preOrder = preOrder
  this.postOrder = postOrder
  this.getMin = getMin
  this.getMinNode = getMinNode
  this.getMaxNode = getMaxNode
  this.getMax = getMax
  this.find = find
  this.remove = remove
  this.removeNode = removeNode
  this.max = max
  this.min = min
  this.update = update
  this.nodeNumber = 1
  this.getNodeNumber = getNodeNumber
  this.getLinkNumber = getLinkNumber
  this.getNodeCount = getNodeCount
}

function insert(data) {
  var n = new Node(data, null, null)
  // 检查是否有根节点
  if (this.root == null) {
    this.root = n
  } else {
    var current = this.root
    var parent
    while (true) {
      parent = current
      if (data < current.data) {
        // 将当前节点设置为父节点的左子节点
        current = current.left
        // 如果左子节点是空的，则父节点的左子节点为新生成的 n
        // 否则继续进行循环，将 parent 设置为父节点的左子节点，
        // 再次循环，直到循环退出
        if (current == null) {
          parent.left = n
          this.nodeNumber++
          break
        }
      } else {
        current = current.right
        // 右侧同理
        if (current == null) {
          parent.right = n
          this.nodeNumber++
          break
        }
      }
    }
  }
}

// 三种遍历 BST 的方式，中序，先序，后序。
// 中序：按照节点上的键值，以升序访问 bst 上的所有节点。
// 先访问左子树，再访问根节点，最后访问右子树。
// 先序：先访问根节点，再以同样的方式访问左子树和右子树。
// 后序：先访问叶子节点，从左子树到右子树，再到根节点。

function inOrder(node) {
  // 实际上还是从根节点出发，只是一直递归到 node 为 null，
  // 也就是最底层的 node.left 为 null，才开始输出值
  if (!(node == null)) {
    inOrder(node.left)
    // 加在这个位置输出，输出顺序 3 16 22 23 37 45 99，中序遍历输出
    console.log(node.show() + ' ')
    inOrder(node.right)
  }
}

// test inOrder
// var nums = new BST()
// nums.insert(23)
// nums.insert(45)
// nums.insert(16)
// nums.insert(37)
// nums.insert(3)
// nums.insert(99)
// nums.insert(22)
// console.log('inOrder start')
// inOrder(nums.root)
// console.log('inOrder end')

// 先序
function preOrder(node) {
  if (!(node == null)) {
    // 加上这句，可以看到实际遍历顺序，23 16 3 22 45 37 99，先序遍历结果
    console.log(node.show() + ' ')
    preOrder(node.left)
    preOrder(node.right)
  }
}

// test preOrder
// var nums = new BST()
// nums.insert(23)
// nums.insert(45)
// nums.insert(16)
// nums.insert(37)
// nums.insert(3)
// nums.insert(99)
// nums.insert(22)
// console.log('preOrder start')
// preOrder(nums.root)
// console.log('preOrder end')

// 后序
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show() + ' ')
  }
}

// test postOrder
// var nums = new BST()
// nums.insert(23)
// nums.insert(45)
// nums.insert(16)
// nums.insert(37)
// nums.insert(3)
// nums.insert(99)
// nums.insert(22)
// console.log('postOrder start')
// postOrder(nums.root)
// console.log('postOrder end')
// 因为最小的节点在左子树
function getMin() {
  var current = this.root
  while (!(current.left == null)) {
    current = current.left
  }
  return current.data
}

function getMinNode(node) {
  var current = node
  while (!(current.left == null)) {
    current = current.left
  }
  return current
}
// 最大的节点在右子树
function getMax() {
  var current = this.root
  while (!(current.right == null)) {
    current = current.right
  }
  return current.data
}
function getMaxNode(node) {
  var current = node
  while (!(current.right == null)) {
    current = current.right
  }
  return current
}
function min() {
  var current = this.root
  while (!(current.left == null)) {
    current = current.left
  }
  return current.show()
}

function max() {
  var current = this.root
  while (!(current.right == null)) {
    current = current.right
  }
  return current.show()
}

function find(data) {
  var current = this.root
  while (current != null) {
    if (current.data == data) {
      return current
    } else if (data < current.data) {
      current = current.left
    } else {
      current = current.right
    }
  }
  return null
}

function remove(data) {
  root = removeNode(this.root, data)
}

function removeNode(node, data) {
  // 本身就是空树
  if (node == null) {
    return null
  }
  // 递归执行
  // 如果包含待删除的数据
  if (data == node.data) {
    // 没有子节点的节点
    if (node.left == null && node.right == null) {
      return null
    }
    // 没有左子节点的节点
    if (node.left == null) {
      return node.right
    }
    // 没有右子节点的节点
    if (node.right == null) {
      return node.left
    }
    // 如果包含两个子节点，要么父节点指向子节点左子树的最大值，要么指向子节点右子树的最小值
    // 这里选择了后一种
    var tempNode = getMinNode(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)
    return node
  } else {
    node.right = removeNode(node.right, data)
    return node
  }
}

// console.log(nums.getMinNode(nums.root), nums.getMaxNode(nums.root))
// console.log(nums.root)
// 因为二叉树上不能插入相同的值的节点，所以当出现重复值的时候，将其节点的 count 属性进行递增
function update(data) {
  var node = this.find(data)
  node.count++
  return node
}
// console.log(nums)

function getNodeNumber() {
  return this.nodeNumber
}
// 边的数量表示 1 S = n1 + 2 * n2
// 边的数量表示 2 S = n - 1，除了根节点，每个节点都有一条边，指向该节点。
function getLinkNumber() {
  return this.nodeNumber - 1
}

function getNodeCount(node) {
  return node.count
}

module.exports = BST

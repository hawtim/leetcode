function Node(key, left, right) {
  this.key = key
  this.left = left
  this.right = right
  this.count = 1
}

Node.prototype.show = function () {
  console.log(this.key)
}

function Tree() {
  this.root = null
}

Tree.prototype = {
  // 插入，判断大小，选择左节点或者右节点插入
  insert: function (key) {
    var node = new Node(key, null, null)
    if (!this.root) {
      this.root = node
      return
    }
    // 非递归实现
    var current = this.root
    var parent = null
    while (current) {
      parent = current
      if (key < parent.key) {
        current = current.left
        if (!current) {
          parent.left = node
          return
        }
      } else {
        current = current.right
        if (!current) {
          parent.right = node
          return
        }
      }
    }
  },
  // 先序中序后序，判断有节点存在才输出
  preOrderRecursive: function (node, array) {
    if (node) {
      array.push(node.key)
      this.preOrderRecursive(node.left, array)
      this.preOrderRecursive(node.right, array)
    }
    return array
  },
  preOrder: function (node) {
    var result = []
    var stack = []
    var current = node
    while (current || stack.length > 0) {
      while (current) {
        result.push(current.key)
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      current = current.right
    }
    return result
  },
  inOrderRecursive: function (node, array) {
    if (node) {
      this.inOrderRecursive(node.left, array)
      array.push(node.key)
      this.inOrderRecursive(node.right, array)
    }
    return array
  },
  inOrder: function (node) {
    /**
     * 取根节点为目标节点，开始遍历
     * 1.左子节点入栈 -> 直至左孩子为空的节点
     * 2.节点出栈 -> 访问该节点
     * 3.以右子节点为目标节点，再依次执行1、2、3
     */
    var result = []
    var stack = []
    var current = node
    while (current || stack.length > 0) {
      // 这一段是负责左子树的
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      result.push(current.key)
      current = current.right
    }
    return result
  },
  postOrderRecursive: function (node, array) {
    if (node) {
      this.postOrderRecursive(node.left, array)
      this.postOrderRecursive(node.right, array)
      array.push(node.key)
    }
    return array
  },
  postOrder: function (node) {
    var result = []
    var stack = []
    var last = null // 标记上一个访问的节点
    var current = node
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack[stack.length - 1]
      if (!current.right || current.right == last) {
        current = stack.pop()
        result.push(current.key)
        last = current
        current = null
      } else {
        current = current.right
      }
    }
    return result
  },
  // 获取最大最小值
  getMinNode: function () {
    var current = this.root
    while (current) {
      if (!current.left) return current
      current = current.left
    }
  },
  getMaxNode: function () {
    var current = this.root
    while (current) {
      if (!current.right) return current
      current = current.right
    }
  },
  getDepth: function (node, deep) {
    deep = deep || 0
    if (!node) return deep
    deep++
    var dl = this.getDepth(node.left, deep)
    var dr = this.getDepth(node.right, deep)
    return Math.max(dl, dr)
  },
  // 实现搜索
  search: function (node, key) {
    if (node) {
      if (key === node.key) {
        return node
      }
      if (key < node.key) {
        return this.search(key, node.left)
      }
      if (key > node.key) {
        return this.search(key, node.right)
      }
    } else {
      return null
    }
  },
  // 实现删除
  remove: function (node, key) {
    if (!node) return null
    if (node.key > key) {
      node.left = this.remove(node.left, key)
    } else if (node.key < key) {
      node.right = this.remove(node.right, key)
    } else {
      if (!node.left && !node.right) {
        // 待删除节点的左右子树为空，直接删除即可
        node = null
      } else if (!node.left && node.right) {
        node = node.right
      } else if (node.left && !node.right) {
        node = node.left
      } else if (node.left && node.right) {
        // 如果待删除的节点的左右子树都不为空。
        // 我们需要找到比当前节点小的最大节点（前驱）来替换自己
        var last = node.left
        while (last.right) {
          last = last.right
        }
        // 最终的last就是比当前节点小的最大节点，将值进行替换
        node.key = last.key
        // 删除该最大节点
        node.left = this.remove(node.left, last.key)
      }
    }
    return node
  },
  find: function (key) {
    var current = this.root
    while (current !== null) {
      if (current.key === key) return current
      if (current.key > key) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  },
  // 因为二叉树上不能插入相同的值的节点，所以当出现重复值的时候，将其节点的 count 属性进行递增
  update: function (key) {
    var node = this.find(key)
    node.count++
    return node
  }
}

var t = new Tree()
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(2)
t.insert(5)
t.insert(4)
t.insert(7)
t.insert(6)
t.insert(0)
console.log(t)
console.log(t.getMinNode(), t.getMaxNode())
console.log(t.preOrder(t.root, []))
console.log(t.inOrder(t.root, []))
console.log(t.postOrder(t.root, []))
console.log(t.getDepth(t.root, 0))
console.log(t.search(t.root))
console.log(t.remove(t.root, 8))
console.log(t.search(t.root, 5))
console.log(t.preOrder(t.root, []))


module.exports = {
  Node: Node,
  Tree: Tree
}
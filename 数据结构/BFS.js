import { Compare, defaultCompare } from '../util'

export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
  insert(key) {
    // 向树中插入一个新的键。
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  search(key) {
    // 在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false。
    
  }
  inOrderTraverse() {
    // 通过中序遍历方式遍历所有节点。

  }
  preOrderTraverse() {
    // 通过先序遍历方式遍历所有节点。

  }
  postOrderTraverse() {
    // 通过后序遍历方式遍历所有节点。

  }
  min() {
    // 返回树中最小的值/键。

  }
  max() {
    // 返回树中最大的值/键。

  }
  remove(key) {
    // 从树中移除某个键。

  }
}

const tree = new BinarySearchTree()
tree.insert(11)
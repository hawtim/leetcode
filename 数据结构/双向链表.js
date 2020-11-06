function Node(element) {
  this.element = element
  this.next = null
  this.previous = null
}

function doubleLinkedList() {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.display = display
  this.remove = remove
  this.findLast = findLast
  this.displayReverse = displayReverse
}
// 比单向链表多一个 previous 属性，使其指向该节点的前驱
function insert(newElement, item) {
  var newNode = new Node(newElement)
  var current = this.find(item)
  newNode.next = current.next
  newNode.previous = current
  current.next = newNode
}

// 双向列表的 remove 方法不需要查找前驱节点
function remove(item) {
  var currNode = this.find(item)
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
    currNode.next = null
    currNode.previous = null
  }
}
// 找到想要的节点
function find(item) {
  var current = this.head
  while (current.element != item) {
    current = current.next
  }
  return current
}
// 查找最后的节点
function findLast() {
  var currNode = this.head
  while (!(currNode.next == null)) {
    currNode = currNode.next
  }
  return currNode
}

function display() {
  var currNode = this.head
  while (!(currNode.next == null)) {
    console.log('display', currNode.next.element)
    currNode = currNode.next
  }
}

function displayReverse() {
  var currNode = this.head
  currNode = this.findLast()
  while (!(currNode.previous == null)) {
    console.log('displayReverse', currNode.element)
    currNode = currNode.previous
  }
}

// test
var cities = new doubleLinkedList()
cities.insert('hawtim', 'head')
cities.insert('alice', 'hawtim')
cities.insert('kunkka', 'alice')
cities.display()
cities.remove('hawtim')
cities.display()
cities.displayReverse()

// commonjs export
module.exports = doubleLinkedList

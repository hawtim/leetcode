function Node(element) {
  this.element = element
  this.next = null
}
// 查找节点
function find(item) {
  var currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 插入节点
function insert(element, item) {
  var newNode = new Node(element)
  var currNode = this.find(item)
  newNode.next = currNode.next
  currNode.next = newNode
}

// 删除节点
function remove(item) {
  var prevNode = this.findPrev(item)
  var currNode = this.find(item)
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next
    currNode.next = null
  }
}

// 查找前一个节点
function findPrev(item) {
  var currNode = this.head
  while(currNode.next !== null && currMode.next.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
// 显示链表
function display() {
  var currNode = this.head
  while (currNode.next !== null) {
    currNode = currNode.next
    console.log(currNode.element)
  }
}

function LList() {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.findPrev = findPrev
  this.display = display
}
// 循环链表和单向链表相似，节点类型时一样的。
// 创建循环链表时，让其头节点的 next 属性指向它本身

function circylarLinkedList() {
  this.head = new Node('head')
  // 关键是初始这句
  this.head.next = this.head
  this.find = find
  this.insert = insert
  this.display = display
  this.findPrevious = findPrevious
  this.remove = remove
}

function display() {
  var currNode = this.head
  // 检查循环到头节点了之后，退出循环
  while (!(currNode.next == null) && !(currNode.next.element == 'head')) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}

// 插入节点，分情况插入新节点
function insert(element, item) {
  var newNode = new Node(element)
  var currNode = this.find(item)
  if (!(currNode.next.element == 'head')) {
    newNode.next = currNode.next
    currNode.next = newNode
  } else {
    newNode.next = this.head
    currNode.next = newNode
  }
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
// 查找节点
function find(item) {
  var currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 查找前一个节点
function findPrev(item) {
  var currNode = this.head
  while(currNode.next !== null && currNode.next.element !== 'head' && currNode.next.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
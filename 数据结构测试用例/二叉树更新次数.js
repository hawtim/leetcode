function genArray(length) {
  var arr = []
  for (var i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 101)
  }
  return arr
}

var BST = require('../数据结构/二叉树.js')

var grades = genArray(100)

var gradeBst = new BST()

for (var i = 0; i < grades.length; ++i) {
  var g = grades[i]
  var grade = gradeBst.find(g)
  if (grade == null) {
    gradeBst.insert(g)
  } else {
    gradeBst.update(g)
  }
}
// 输出节点数量
console.log(gradeBst.getNodeNumber())
// 输出边的数量
console.log(gradeBst.getLinkNumber())

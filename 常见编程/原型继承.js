// 原型继承
// 父类的实例属性变成子类的原型属性

function Father() {
  this.fatherName = 'father'
}

Father.prototype.getFatherName = function() {
  console.log(this.fatherName)
}
function Child() {
  this.childName = 'child'
}

Child.prototype = new Father()
Child.prototype.constructor = Child
Child.prototype.getChildName = function() {
  console.log(this.childName)
}

console.log(new Child())

// 最大的问题就是用 js 还是可以改变原型上的方法
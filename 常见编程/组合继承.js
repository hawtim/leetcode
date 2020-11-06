// 通过子类的原型对象指向父类的实例的方式来实现继承

function Super() {
  this.flag = true
}

Super.prototype.getFlag = function () {
  return this.flag
}

function Sub() {
  this.subFlag = false
}

Sub.prototype = new Super()
Sub.prototype.getSubFlag = function () {
  return this.subFlag
}

var sub = new Sub()
console.log(sub)

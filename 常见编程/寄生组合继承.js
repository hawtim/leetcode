function extend(subClass, superClass) {
  var prototype = Object.create(superClass.prototype) //基于超类（构造函数）的原型对象创建新的原型对象
  // 原型对象的构造函数指向子类
  prototype.constructor = subClass // 增强对象
  // 子类的原型对象指向新创建的原型对象
  subClass.prototype = prototype // 指定对象
}

function Father(name){
  console.log('调用了 father')
  this.name = name
  this.colors = ["red","blue","green"]
}

Father.prototype.sayName = function(){
  alert(this.name)
}

function Son(name, age){
  Father.call(this,name) //继承实例属性，第一次调用Father()
  this.age = age
}

extend(Son, Father) // 继承父类方法,此处并不会第二次调用Father()

Son.prototype.sayAge = function(){
  alert(this.age)
}
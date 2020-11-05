// 创建一个新的对象
// 继承父类原型上的方法.
// 添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
// 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。

function myNew(ctor, ...args) {
  // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
  const newObj = Object.create(ctor.prototype)
  const result = ctor.apply(newObj, args)
  return typeof result === 'object' ? result : newObj
}

function Person(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`;
};

const person = new Person('zhang', 'haotian');

const person1 = myNew(Person, 'zhang', 'haotian')

console.log(person.constructor === person.__proto__.constructor)
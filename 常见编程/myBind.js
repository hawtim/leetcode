// 和 call 和 apply 不同的是，返回一个绑定上下文的函数

Function.prototype.myBind = function (context, ...args1) {
  if (this === Function.prototype) {
    throw new TypeError('Error')
  }
  // 闭包引用初始 this
  const self = this
  return function F(...args2) {
    // 一个绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
    // 判断是否用于构造函数
    if (this instanceof F) {
      // 将 this 绑定到 new 实例后的对象上，因为 new 的特性所以可以获得原型
      return new self(...args1, ...args2)
    }
    // 起到柯里化的作用
    return self.apply(context, args1.concat(args2))
  }
}

// 比如
var obj1 = {
  a: 1,
  fun1: function (name, age) {
    this.habit = 'coding'
    console.log(this.a)
    console.log(name)
    console.log(age)
  }
}

obj1.fun1.prototype.friend = '小黑'

var obj2 = {
  a: 2
}

// const fun2 = obj1.fun1.myBind(obj2, 'hawtim', 27)
// fun2()
// console.log(obj2)

const fun3 = obj1.fun1.myBind(obj2, 'hawtim', 27)
// 这时候会忽略掉 this
var obj3 = new fun3()
console.log(obj3.__proto__)
// return obj1.fun1.apply(obj2, args1.concat(args2))

// // var fun2 = obj1.fun1.bind(obj2)
// // fun2()
// // 实现 mybind 函数具有原生 bind 的功能
// var fun2 = obj1.fun1.myBind()
// fun2()

// let value = 2;
// let foo = {
//     value: 1
// };
// function bar(name, age) {
//     this.habit = 'coding';
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }
// bar.prototype.friend = 'xiaohei';

// let bindFoo = bar.myBind(foo, 'hawtim');
// let obj = new bindFoo(27);
// // undefined
// // hawtim
// // 27

// obj.habit;
// // coding

// obj.friend;
// xiaohei

// es6 的 class 默认是严格模式
// 箭头函数在定义时默认绑定外层的 this，即 babel 后的结果
class A {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return () => {
      console.log(this);
    };
  }
  output() {
    console.log(this.a, this.b, this.c);
    return () => {
      console.log(this)
    }
  }
}

var a = new A(1, 2, 3);
var output = a.output()
output()

// 利用 IIFE 立即执行函数 封闭作用域，形成闭包
var A = (function () {
  function A(a, b, c) {
    var _this = this
    this.a = a 
    this.b = b 
    this.c = c
    return function () {
      console.log(_this)
    }
  }
  A.prototype.output = function () {
    var _this = this
    console.log(this.a, this.b, this.c)
    return function () {
      console.log(_this)
    }
  }
  return A
})()
// 结果就很清晰了
console.log(A, A.prototype)


// =========== babel ============ //
// "use strict";

// var A = /*#__PURE__*/ (function () {
//   function A(a, b, c) {
//     var _this = this;

//     this.a = a;
//     this.b = b;
//     this.c = c;
//     return function () {
//       console.log(_this);
//     };
//   }

//   var _proto = A.prototype;

//   _proto.output = function output() {
//     console.log(this.a, this.b, this.c);
//   };

//   return A;
// })();

// var a = new A(1, 2, 3);
// a();

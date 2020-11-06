// es6 的 class 默认是严格模式，所以 var a 执行后输出 this 的 undefined
// 而 babel 转化后，可以不是严格模式，所以就会指向 window
class A {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return function () {
      console.log(this);
    };
  }
  output() {
    console.log(this.a, this.b, this.c);
  }
}

var a = new A(1, 2, 3);
a();


// ====================== babel ======================== //
"use strict"; // 关键是这行，决定是 undefined 还是 window

var A = /*#__PURE__*/ (function () {
  function A(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return function () {
      console.log(this);
    };
  }

  var _proto = A.prototype;

  _proto.output = function output() {
    console.log(this.a, this.b, this.c);
  };

  return A;
})();

var a = new A(1, 2, 3);
a();

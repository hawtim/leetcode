// ES6 实现继承

function inhert(subClass, superClass) {
  // 实现 subClass.prototype.__proto__ = superClass.prototype
  subClass.prototype = Object.create(superClass.prototype)
  // 因为上面一行会把 subClass.prototype.constructor 改为 superClass.constructor
  subClass.prototype.constructor = subClass
  // 以上两行等同于以下，实现了 instanceOf 的一致性并且原型链正确
  /**
   * function F(){}
   * F.prototype = superClass.prototype
   * subClass.prototype = new F() // 将一个 F 的实例挂载到 subClass.prototype 上
   * subClass.prototype.constructor = subClass // 手动改回来
  */
  // 目的是实现子类可以访问父类的静态属性和方法
  subClass.__proto__ = superClass
}

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}


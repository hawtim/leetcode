function instanceOf(left, right) {
  let proto = left.__proto__
  let prototype = right.prototype
  // 如果是实例的话，两者是相等的
  while(true) {
    if (proto === null) return false
    if (proto === prototype) return true
    // 往上一级原型链查找
    proto = proto.__proto__
  }
}
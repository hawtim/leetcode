// 对象默认不支持 for ... of ...，如何实现支持

var myObject = {
  a: 2,
  b: 3,
  c: 4
};

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this
    var idx = 0
    var ks = Object.keys(o)
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length
        }
      }
    }
  }
})

var it = myObject[Symbol.iterator]()
it.next()
it.next()
it.next()
it.next()

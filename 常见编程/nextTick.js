// 因为我们本质上是要返回一个兼容版的 function
// 浏览器本身没有 nextTick
var nextTick = (function () {
  var canImmediate = typeof window !== undefined && window.setImmediate
  var canPost = typeof window !== undefined && window.postMessage && window.addEventListener
  if (canImmediate) return function (f) { return window.setImmediate(f) }
  // 这一段不理解，用 postMessage
  if (canPost) {
    var queue = [] // 内部维护一个队列
    window.addEventListener('message', (e) => {
      var source = e.source
      if ((source === window || source === null) && e.data === 'process-tick') {
        e.stopPropagation()
        if (queue.length > 0) {
          var fn = queue.shift() // 取出第一个 先进先出
          fn()
        }
      }
    }, true) // 在捕获阶段
    return function nextTick(fn) {
      queue.push(fn) // push 一个
      window.postMessage('process-tick', '*')
    }
  }
  // 最后使用 setTimeout
  return function nextTick(fn) {
    setTimeout(fn, 0)
  }
})()

// OR
class NextTick {
  constructor() {
    var canImmediate = typeof window !== undefined && window.setImmediate
    var canPost = typeof window !== undefined && window.postMessage && window.addEventListener
    if (canImmediate) return function (f) { return window.setImmediate(f) }
    // 这一段不理解，用 postMessage
    if (canPost) {
      var queue = []
      window.addEventListener('message', (e) => {
        var source = e.source
        if (source === window || source === null && e.data === 'process-tick') {
          e.stopPropagation()
          if (queue.length > 0) {
            var fn = queue.shift()
            fn()
          }
        }
      }, true) // 在捕获阶段
      return function nextTick(fn) {
        queue.push(fn)
        window.postMessage('process-tick', '*')
      }
    }
    // 最后使用 setTimeout
    return function nextTick(fn) {
      setTimeout(fn, 0)
    }
  }
}

var nextTick = new NextTick()
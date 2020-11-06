function once1(type, selector, callback) {
  selector.addEventListener(
    type,
    function fn(e) {
      // 不使用 e.target 因为在事件委托时，e.currentTarget 才是绑定事件的节点
      selector.removeEventListener(type, fn)
      return callback(e)
    },
    false
  )
}

function multi(type, selector, callback, times) {
  // 立即执行函数表达保存变量作用域
  function fn() {
    selector.addEventListener(
      type,
      function fn(e) {
        if (--times) {
          return callback(e, times)
        } else {
          selector.removeEventListener(type, fn)
          // 释放内存
          fn = null
          return callback(e, times)
        }
      },
      false
    )
  }
  return fn()
}

function bindDomEvent(type, selector, callback) {
  const collection = document.querySelectorAll(selector)
  const arr = Array.from(collection)
  arr.forEach((item) => {
    once1('click', item, callback)
  })
}

function once2(type, selector, callback) {
  selector.addEventListener(type, callback, {once: true})
}

function once1(type, selector, callback) {
  selector.addEventListener(
    type,
    function fn(e) {
      console.log(e.target, e.currentTarget)
      e.target.removeEventListener(type, fn)
      return callback(e)
    },
    false
  )
}

// 节流，指一定时间内，多次触发同一事件只执行一次
// 场景，滚动事件，20ms 内只触发一次
function throttle(fn, delay = 500) {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}

function test(...args) {
  console.log(args)
}

const throttleTest = throttle(test, 20, false)
for (let i = 0; i < 20; i++) {
  // setTimeout(() => {
  throttleTest(i)
  test(i)
  // }, 20)
}

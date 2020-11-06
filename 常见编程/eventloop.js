// eventloop.js
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')

// 浏览器端
// start end macro task
// promise3 micro task
// timer1 macro task
// promise1 micro task
// timer2 macro task
// promise2 micro task

// nodejs 理论上
// start end           // -> loop 阶段
// promise3            // microtask
// ...                 // -> checked 阶段
// ...                 // -> closecallbacks 阶段
// timer1 timer2       // -> timers 阶段
// promise1, promise2  // microtask
// ...                 // -> io callbacks 阶段
// ...                 // -> idle, prepare 阶段





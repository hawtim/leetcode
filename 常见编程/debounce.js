// 防抖，指事件多次触发的时候，只有在一定时间内没有再次触发的时候，事件才会执行一次
// 场景：输入框实时搜索，最后不输入的时候才进行查询搜索
// function debounce(fn, wait) {
//   let timer = null
//   return (...args) => {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, args)
//     }, wait)
//   }
// }

// // 立即执行版本
// function debounce(fn, wait) {
//   let timer = null
//   return (...args) => {
//     if (timer) clearTimeout(timer)
//     let immediate = !timer
//     timer = setTimeout(() => {
//       timer = null
//     }, wait)
//     if (immediate) fn.apply(this, args)
//   }
// }

function debounce(fn, wait, immediate) {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    if (immediate) {
      let immediate = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (immediate) fn.apply(this, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}

function test(...args) {
  console.log(args)
}

const debounceTest = debounce(test, 20, true)

for (var i = 0; i < 20; i++) {
  setTimeout(() => {
    debounceTest(i)
    // test(i)
  }, 20)
}
setTimeout(() => {
  debounceTest(30)
}, 100)

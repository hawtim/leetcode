
// repeat 实现，使用JS实现一个repeat方法，
// 调用这个 repeatedFunc("hellworld") ，会alert4次 helloworld, 每次间隔3秒
function repeat(func, times, wait) {
  var context = this
	return (...args) => {
		var count = 0
    let itid = setInterval(() => {
      func.apply(context, args)
			if (++count == times) {
        clearInterval(itid)
      }
    }, wait)
  }
}

function alert(txt) {
  console.log(txt)
}
const repeatedFunc = repeat(alert, 4, 3000)

repeatedFunc("hellworld")
var id = 'Global'

var obj = {id: 'Obj'}

function fun1() {
  // setTimeout中使用普通函数
  setTimeout(function () {
    console.log(this.id)
  }, 2000)
}

function fun2() {
  // setTimeout中使用箭头函数
  setTimeout(() => {
    console.log(this.id)
  }, 2000)
}

fun1.call(obj) // 'Global'
fun2.call(obj) // 'Obj'

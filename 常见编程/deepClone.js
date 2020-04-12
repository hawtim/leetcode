function deepClone(obj) {
  // 在函数、日期、正则表达式时，JSON.stringify时，都会被转换成对象{}
  // 过滤一些特殊情况
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) {
    // 正则
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    // 日期
    return new Date(obj)
  }
  // let newObj = {}
  // let newObj = new Object()
  // 不直接创建空对象的目的：克隆的结果和之前保持相同所属类 => 即能克隆普通对象，又能克隆某个实例对象
  // 实例对象的 constructor 指向构造函数， 确保原型链是一致的
  let newObj = new obj.constructor()
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

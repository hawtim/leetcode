// 简单的深度克隆
function deepClone(obj) {
  if (obj === null) return null
  // 如果是普通的键值对 或 函数，则返回
  if (typeof obj !== 'object') return obj
  // 函数，正则，日期，在 json.stringify 的时候转换成对象，这是 json.stringify 的缺陷
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  let newObj = new obj.constructor()
  for (let key in obj) {
    // 判断是不是自有属性
    if (obj.hasOwnProperty(key)) {
      // 如果是递归调动深度克隆
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

var obj = {
  test: function () {}
}

deepClone(obj)

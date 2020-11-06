function Set() {
  let items = {}
  this.size = 0
  this.has = function (val) {
    return items.hasOwnProperty(val)
  }
  this.add = function (val) {
    if (!this.has[val]) {
      items[val] = val
      this.size++
      return true
    }
    return false
  }
  this.delete = function (val) {
    if (this.has[val]) {
      delete items[val]
      this.size--
      return true
    }
    return false
  }
  // keys()方法
  this.keys = function () {
    return Object.keys(items) // 返回遍历集合的所有键名的数组
  }
  // values()方法
  this.values = function () {
    return Object.values(items) // 返回遍历集合的所有键值的数组
  }
  this.clear = function (val) {
    items = {}
    this.size = 0
  }
  this.union = function (other) {
    let union = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    values = other.values()
    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    return union
  }
  this.intersect = function (other) {
    let intersect = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (other.has(values[i])) {
        intersect.add(values[i])
      }
    }
    return intersect
  }
  // 差集
  this.difference = function (other) {
    let difference = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (!other.has(values[i])) {
        // 将不存在于other集合中的添加到新的集合中
        difference.add(values[i])
      }
    }
    return difference
  }
}

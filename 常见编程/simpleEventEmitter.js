class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }
  // static defaultMaxListener = 10
  on(type, cb, flag) {
    if (!this._events) {
      this._events = Object.create(null)
    }
    if (type !== 'newListener') {
      this._events['newListener'] && this._events['newListener'].forEach(listener => {
        listener(type)
      })
    }
    if (this._events[type]) {
      if (flag) {
        this._events[type].unshift(cb)
      } else {
        this._events[type].push(cb)
      }
    } else {
      this._events[type] = [cb]
    }
  }
  once(type, cb, flag) {
    function wrap() {
      cb(...arguments)
      this.off(type, wrap)
    }
    // 自定义属性
    wrap.listen = cb
    this.on(type, wrap, flag)
  }
  off(type, cb) {
    if (this._events[type]) {
      this._events[type] = this._events[type].filter(listener => {
        return cb !== listener && cb !== listener.listen
      })
    }
  }
  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach(listener => {
        listener.call(this, ...args)
      })
    }
  }
}

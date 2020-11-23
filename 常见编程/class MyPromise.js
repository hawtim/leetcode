// 设定三个状态 PENDING、FULFILLED、REJECTED ，
// 只能由 PENDING 改变为 FULFILLED 或 REJECTED，并且只能改变一次

// MyPromise 接收一个函数 executor，
// executor 有两个参数 resolve 方法和 reject 方法
// resolve 将 PENDING 改变为 FULFILLED
// reject 将 PENDING 改变为 FULFILLED
// promise 变为 FULFILLED 状态后具有一个唯一的 value
// promise 变为 REJECTED 状态后具有一个唯一的 reason

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCbs = []
    this.onRejectedCbs = []
    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.onFulfilledCbs.forEach((func) => func())
      }
    }
    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state === REJECTED
        this.reason = reason
        this.onRejectedCbs.forEach((func) => func())
      }
    }
    // 这个逻辑是用来捕获报错，在 .catch 的时候能用上这时候的 reason
    try {
      executor(resolve, reject)
    } catch (reason) {
      reject(reason)
    }
  }
  // 一个 promise 可绑定多个 then 方法，这意味着 then 要返回一个新的 promise
  // then 方法可以同步调用也可以异步调用
  // 同步调用：状态已经改变，直接调用 onFulfilled 方法 或者 onRejected 方法
  // 异步调用：状态还处于 pending 的过程中，将 onFulfilled 方法和 onRejected 方法分别加入
  //         两个回调事件数组中，等待状态改变的时候执行
  // 异步调用新返回的 promise 的 resolve 和 reject 时，会将回调事件数组循环执行直至清空。
  then(onFulfilled, onRejected) {
    // 类似 MyPromise.then('xxx').then(res => console.log(res))
    // 把 then 作为一个管道
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function (value) {
        return value
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function (reason) {
        return reason
      }
    }
    const promise2 = new MyPromise((resolve, reject) => {
      switch (this.state) {
        case FULFILLED:
          // 用 setTimeout 模拟异步
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              resolve(x)
            } catch (reason) {
              reject(reason)
            }
          }, 0)
          break
        case REJECTED:
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              resolve(x)
            } catch (reason) {
              reject(reason)
            }
          }, 0)
          break
        case PENDING:
          this.onFulfilledCbs.push(() => {
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value)
                resolve(x)
              } catch (reason) {
                reject(reason)
              }
            }, 0)
          })
          this.onRejectedCbs.push(() => {
            setTimeout(() => {
              try {
                const x = onRejected(this.reason)
                resolve(x)
              } catch (reason) {
                reject(reason)
              }
            }, 0)
          })
          break
      }
    })
    return promise2
  }
  // 捕获错误，若上面没有定义 reject 方法，所有的异常会走向 catch 方法
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  // 不管是resolve 还是 reject 都会调用
  finally(fn) {
    return this.then(
      (value) => {
        fn()
        return value
      },
      (reason) => {
        fn()
        throw reason
      }
    )
  }
  // 直接得到一个 fulfilled 的 promise
  static resolve() {
    return MyPromise((resolve, reject) => {
      resolve(value)
    })
  }
  // 直接得到一个 rejected 的 promise
  static reject() {
    return MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
  // 接受一个 Promise 数组，当所有 promise 状态改变为 onFulfilled 之后，执行 resolve
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (!promises.length) return resolve([])
      let result = []
      let index = 0
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            result[i] = data
            if (++index === promise.length) {
              resolve(result)
            }
          },
          (err) => {
            reject(err)
            return
          }
        )
      }
    })
  }
// 接受一个 Promise 数组，当其中一个 promise 状态变 onFulfilled 之后，执行 resolve
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (!promises.length) return resolve()
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            resolve(data)
          },
          (err) => {
            return reject(err)
          }
        )
      }
    })
  }
}

// 测试代码1
console.log(1)

let promise = new MyPromise((resolve, reject) => {
  console.log(3)
  resolve('hawtim')
})

promise.then((value) => {
  console.log(value)
})

console.log(2)

// 测试代码2
new MyPromise((resolve, reject) => {
  resolve('xxxxx') // 直接 fulfilled 逻辑
}).then((res1) => {
  console.log('res1', res1)
  return res1
}).then((res2) => {
  console.log('res2', res2)
})

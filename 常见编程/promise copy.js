// 设定三个状态 PENDING、FULFILLED、REJECTED ，只能由PENDING改变为FULFILLED或REJECTED，并且只能改变一次
// MyPromise接收一个函数executor，executor有两个参数resolve方法和reject方法
// resolve将PENDING改变为FULFILLED
// reject将PENDING改变为FULFILLED
// promise变为FULFILLED状态后具有一个唯一的value
// promise变为REJECTED状态后具有一个唯一的reason

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 接下来我们考虑 then 的问题

// then方法接受两个参数onFulfilled、onRejected，它们分别在状态由PENDING改变为FULFILLED、 REJECTED 后调用

// 一个promise可绑定多个then方法
// then方法可以同步调用也可以异步调用
// 同步调用：状态已经改变，直接调用onFulfilled方法
// 异步调用：状态还是 PENDING，将 onFulfilled、onRejected 分别加入两个函数数组 onFulfilledCallbacks 、 onRejectedCallbacks ，
// 当异步调用 resolve 和 reject 时，将两个数组中绑定的事件循环执行。

function MyPromise(executor) {
  this.state = PENDING
  this.value = null
  this.reason = null
  this.onFulfilledCallbacks = []
  this.onRejectedCallbacks = []
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(fun => fun())
    }
  }
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fun => fun());
    }
  }
  // 这个逻辑是用来捕获报错，在 .catch 的时候能用上
  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}
// 用 settimeout 来模拟异步调用
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function') {
    onFulfilled = function (value) {
      return value;
    }
  }
  if (typeof onRejected !== 'function') {
    onRejected = function (reason) {
      throw reason;
    }
  }
  const promise2 = new MyPromise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        })
        break
    }
  })
  return promise2
}
// 捕获错误，若上面没有定义 reject 方法，所有的异常会走向catch方法
MyPromise.prototype.catch = function (onRejected) {
  // 没有 onResolve
  return this.then(null, onRejected);
};
// 不管是resolve 还是 reject 都会调用
MyPromise.prototype.finally = function (fn) {
  return this.then(
    value => {
      fn();
      return value;
    }, reason => {
      fn();
      throw reason;
    });
};

// resolve 和 reject 是静态属性
MyPromise.resolve = function (value) {
  return MyPromise((resolve, reject) => {
    resolve(value)
  })
}

MyPromise.reject = function (reason) {
  return MyPromise((resolve, reject) => {
    reject(reason)
  })
}
// 还有 promise.all 和 race 方法
// 接受一个 Promise 数组，当所有 promise 状态变 resolve 之后，执行 resolve
MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return resolve([])
    let result = []
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(data => {
        result[i] = data
        if (++index === promise.length) {
          resolve(result)
        }
      }, err => {
        reject(err)
        return
      })
    }
  })
}
// 接受一个 Promise 数组，当其中一个 promise 状态变 resolve 之后，执行 resolve
MyPromise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return resolve()
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(data => {
        resolve(data)
      }, err => {
        return reject(err)
      })
    }
  })
}




// @test

console.log(1);

let promise = new MyPromise((resolve, reject) => {
  console.log(3)
  resolve('ConardLi');
});

promise.then((value) => {
  console.log(value);
});

console.log(2);
// @test

//@test
new Promise((resolve, reject) => {
  resolve(Promise.resolve('xxxxx')) // 直接 fulfilled 逻辑
}).then(res1 => {
  console.log(res1)
}).then(res2 => {
  console.log(res2)
})

//  pending 状态下，我们就需要把多个 then 的回调函数放到 onFulfilledCallbacks 或者 onRejectedCallbacks 中，
// 等待 Promise 的 executor 对这两个数组进行事件循环并执行
this.onFulfilledCallbacks = [
  res1 => {
    console.log(res1)
  },
  res2 => {
    console.log(res2)
  }
]
//@test
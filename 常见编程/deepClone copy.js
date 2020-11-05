// 可递归的数据类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
const weakMapTag = "[object WeakMap]"

// 不可递归的数据类型
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target);
}

function getCtor(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
// Symbol
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}
// 正则表达式
function cloneReg(target) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}

function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

function cloneOtherType(target, type) {
  const Ctor = target.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return cloneReg(target);
    case symbolTag:
      return cloneSymbol(target);
    case funcTag:
      return cloneFunction(target);
    default:
      return null;
  }
}

// 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系。
// 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题
// 如果是 WeakMap 的话，target 和 obj 存在的就是弱引用关系，当下一次垃圾回收机制执行时，这块内存就会被释放掉。
// 涉及垃圾回收机制, weakMap 是弱引用，如果是 map 我们需要手动清除 map 的属性才能清空内存。

function deepClone(target, map = new WeakMap()) {
  if (!isObject(target)) return target

  const type = getType(target)
  // 判断类型
  let cloneTarget;
  if (deepTag.includes(type)) {
    // 保留原型链及原型链上的方法
    cloneTarget = getCtor(target, type)
  } else {
    return cloneOtherType(target, type);
  }

  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)
  // 克隆 set
  if (type === setTag) {
    target.forEach(value => {
      cloneTarget.add(deepClone(value, map))
    })
    return cloneTarget
  }
  // 克隆 set
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, deepClone(value, map))
    })
  }
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = deepClone(target[key], map);
  });
  return cloneTarget
}


// 比如

var a = {}
var z = deepClone(a)
console.log(z)
a = null

// 那么 deepClone 过程中 map 对 a 的引用还是存在的，但是如果我们使用 weakMap 则会在下一次的垃圾回收过程中回收。
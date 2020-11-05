/**
 * [delegateEvent description]
 * @param  {[type]}   parentSelector 父元素
 * @param  {[type]}   targetSelector 目标元素
 * @param  {[type]}   events         事件
 * @param  {Function} fn             回调函数
 * @return {[type]}                  null
 */
function delegateEvent(parentSelector, targetSelector, events, fn) {
  // 事件绑定兼容性处理
  function addEvent(el, type, handle) {
    if (el.addEventListener) {
      el.addEventListener(type, handle, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, handle);
    } else {
      el['on' + type] = handle;
    }
  }
  // 如果元素被指定的选择器字符串选择，Element.matches()  方法返回 true; 否则返回 false。
  // 对于不支持 Element.matches() 或 Element.matchesSelector()，但支持 document.querySelectorAll() 方法的浏览器，存在以下替代方案
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // 事件处理逻辑
  addEvent(parentSelector, events, function (e) {

    // 兼容性处理
    var e = e || window.event;
    var t = e.target || e.srcElement;

    // currentTarget === parentSelector
    var currentTarget = e.currentTarget;

    // 遍历并判断是否为目标元素，如果不是，则往元素的 parentNode 继续查找
    while (!t.matches(targetSelector)) {
      // 如果是目标元素则跳出循环
      if (t === currentTarget) {
        t = null;
        break;
      }
      t = t.parentNode;
    }

    if (t) {
      // 将回调函数的 this 指向目标元素
      fn.call(t, Array.prototype.slice.call(arguments));
    }
  });

}
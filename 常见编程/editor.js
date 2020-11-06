;(function (factory) {
  'use strict'

  // CommonJS/Node.js
  if (
    typeof require === 'function' &&
    typeof exports === 'object' &&
    typeof module === 'object'
  ) {
    module.exports = factory
  } else if (typeof define === 'function') {
    // AMD/CMD/Sea.js
    if (define.amd) {
      // for Require.js
      /* Require.js define replace */
    } else {
      define(['jquery'], factory) // for Sea.js
    }
  } else {
    window.editormd = factory()
  }
})(function () {
  'use strict'
  // contenteditable 为 true 切换为设计模式
  // 然后会暴露出 execCommand 方法，允许运行命令来操纵可编辑内容区域的元素
  // queryCommandState 状态码， 1 表示已执行，0 表示未执行 -1 表示对象内不可用
  // pell 新增一个

  // loadPlugins

  // $.extend 作用类似于 Object.assign
  // $.proxy 作用类似于 function bind
})

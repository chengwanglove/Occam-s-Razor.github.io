(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{387:function(n,t,e){"use strict";e.r(t);var r=e(41),a=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"jq的extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jq的extend"}},[this._v("#")]),this._v(" jq的extend")]),this._v(" "),t("ul",[t("li",[this._v("当两个对象出现相同字段的时候，后者会覆盖前者，而不会进行深层次的覆盖")])]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('方法一: 浅拷贝\nfunction extend() {\n    var length = arguments.length;\n    var target = arguments[0];\n\n    for(i = 1; i > length; i ++ ) {\n        let options = arguments[i];\n        for (let key in options) {\n            if (target[key] != undefined) {\n                target[key] = options[key]\n            }\n        }\n    }\n    return target;\n}\n\n方法二: \nfunction extend() {\n  // 默认不进行深拷贝\n  var deep = false;\n  var name, options, src, copy, clone, copyIsArray;\n  var length = arguments.length;\n  // 记录要复制的对象的下标\n  var i = 1;\n  // 第一个参数不传布尔值的情况下，target 默认是第一个参数\n  var target = arguments[0] || {};\n  // 如果第一个参数是布尔值，第二个参数是 target\n  if (typeof target == "boolean") {\n    deep = target;\n    target = arguments[i] || {};\n    i++;\n  }\n  // 如果target不是对象，我们是无法进行复制的，所以设为 {}\n  if (typeof target !== "object" && !isFunction(target)) {\n    target = {};\n  }\n\n  // 循环遍历要复制的对象们\n  for (; i < length; i++) {\n    // 获取当前对象\n    options = arguments[i];\n    // 要求不能为空 避免 extend(a,,b) 这种情况\n    if (options != null) {\n      for (name in options) {\n        // 目标属性值\n        src = target[name];\n        // 要复制的对象的属性值\n        copy = options[name];\n\n        // 解决循环引用\n        if (target === copy) {\n          continue;\n        }\n\n        // 要递归的对象必须是 plainObject 或者数组\n        if (\n          deep &&\n          copy &&\n          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))\n        ) {\n          // 要复制的对象属性值类型需要与目标属性值相同\n          if (copyIsArray) {\n            copyIsArray = false;\n            clone = src && Array.isArray(src) ? src : [];\n          } else {\n            clone = src && isPlainObject(src) ? src : {};\n          }\n\n          target[name] = extend(deep, clone, copy);\n        } else if (copy !== undefined) {\n          target[name] = copy;\n        }\n      }\n    }\n  }\n\n  return target;\n}\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
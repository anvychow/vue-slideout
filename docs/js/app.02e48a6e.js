(function(e){function t(t){for(var o,a,l=t[0],r=t[1],c=t[2],u=0,v=[];u<l.length;u++)a=l[u],s[a]&&v.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,l=1;l<i.length;l++){var r=i[l];0!==s[r]&&(o=!1)}o&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},s={app:0},n=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2f7f":function(e,t,i){},"39aa":function(e){e.exports={en:{},zh:{"A Slide-Out component for Vue.js 2.0":"一个 Vue.js 2.0 的侧滑组件","Language:":"选择语言:",Install:"安装",or:"或","For the latest code, you can:":"可以通过以下方式获取最新代码:","download archive":"下载归档",Source:"源码","Demo Source":"示例源码",Samples:"示例","You can press <code>ESC</code> key to close slide.":"可以通过按下<code>ESC</code>键来关闭 Slide",'Close button would be removed while use <code>slot="header"</code>':'当使用<code>slot="header"</code>时，关闭按钮会被移除',"Element <code>#customize</code> <b>SHOULD NOT</b> be <code>position: static</code>":"元素<code>#customize</code> <b>不能</b> 设置为 <code>position: static</code>","Resize is available for this instance.":"此实例支持拖动改变大小","<code>body</code> scroll is locked now, close slide to release it.":"现在已经锁定了<code>body</code>的滚动了，关闭slide以释放锁定","Move the cursor onto this border to have a try":"将鼠标光标移动到这条边试一下","makes it resizable":"使其可以拖动改变大小","makes function <code>onResize</code> to accept <code>resize</code> event":"使函数 <code>onResize</code> 接收 <code>resize</code> 事件","Long header text turns out <b>ellipse</b> style.":"很长的头部文本会显示为<b>ellipse</b>(省略号)格式","This makes slide ignore <code>Esc</code> key press.":"按下<code>Esc</code>键会被Slide忽略","So you can not close slide by press <code>Esc</code> key.":"因此此时不能通过按<code>Esc</code>键来关闭","No matter how many times you press <code>Esc</code> key, slide will always keep opened.":"无论你按多少次<code>Esc</code>键，Slide都不会关闭","Dock position":"停靠位置",Top:"上",Right:"右",Bottom:"下",Left:"左",Customize:"自定义",Header:"头部","Append to specified element <b>#customize</b>":"放到<b>#customize</b>元素中","Size: 50%":"尺寸: 50%","Size: 200px":"尺寸: 200px","No close button":"没有关闭按钮","No Header":"没有头部","No Footer":"没有底部","Disable close on mask click":"禁用点击遮罩层关闭","Disable animation":"禁用动画","Mask color":"遮罩层颜色","No Mask":"没有遮罩层","Ignore ESC key press":"忽略 ESC 按键",Event:"事件","Event after open and before close":"打开后以及关闭前的事件","Allow Resize":"允许改变尺寸","Long header text":"长标题文本","Long header":"长标题","I am opened, I will close after 3 seconds while click <code>close</code> button, and event <code>closed</code> will be emitted after slide really closed":"我打开了，在点击了<code>关闭</code>按钮后过3秒我才会关闭，在真正关闭后会触发事件<code>closed</code>","I will close after 3 seconds...":"我会在 3 秒后关闭","Press Esc in <code>editable element</code> will not close slide":"在<code>可编辑元素</code>内按下ESC不会关闭Slide",'This is an editable <code>DIV</code> element with attribute <code>contenteditable="true"</code>':'这是一个设置了属性 <code>contenteditable="true"</code> 的 <code>DIV</code> 元素','Slide will not close if you press <code>Esc</code> key in editable element, such as <code>input</code>, <code>textarea</code>, <code>div[contenteditable="true"]</code>':'如果你在可编辑元素(<code>input</code>, <code>textarea</code>, <code>div[contenteditable="true"]</code>)内按下 <code>Esc</code> 键时，Slide 不会关闭',"Hot key: Esc":"快捷键: Esc"}}},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var o=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("h1",[e._v("\n    SlideOut\n    "),i("small",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("A Slide-Out component for Vue.js 2.0")])]),i("h2",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Install")]),i("code",[e._v("npm install @hyjiacan/vue-slideout")]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("or")]),i("code",[e._v("yarn add @hyjiacan/vue-slideout")]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("For the latest code, you can:")]),i("code",[e._v("git clone https://github.com/hyjiacan/vue-slideout.git")]),i("p",[i("span",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("or")]),i("a",{directives:[{name:"lang",rawName:"v-lang"}],attrs:{href:"https://github.com/hyjiacan/vue-slideout/archive/master.zip"}},[e._v("download archive")])]),i("h2",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Source")]),i("ul",[e._m(0),e._m(1),i("li",[i("a",{directives:[{name:"lang",rawName:"v-lang"}],attrs:{href:"https://github.com/hyjiacan/vue-slideout/blob/master/src/components/Demo.vue",target:"_blank"}},[e._v("Demo Source")])])]),i("h2",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Samples")]),i("demo",{on:{"show-tip":e.onShowTip}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipVisible,expression:"tipVisible"}],attrs:{id:"tip"}},[e._v(e._s(e.tipText))])],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"https://github.com/hyjiacan/vue-slideout.git"}},[e._v("Github")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"https://gitee.com/hyjiacan/vue-slideout.git"}},[e._v("Gitee")])])}],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"demo"}},[i("p",{directives:[{name:"lang",rawName:"v-lang"}],staticClass:"standout"},[e._v("You can press "),i("code",[e._v("ESC")]),e._v(" key to close slide.")]),i("slide-out",{attrs:{visible:e.demo1Visible,dock:e.position,title:e.text.header},on:{"update:visible":function(t){e.demo1Visible=t}}},[i("code",[e._v(':dock="'+e._s(e.position)+'"')]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo2Visible},on:{"update:visible":function(t){e.demo2Visible=t}}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.text.header))]),i("div",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Close button would be removed while use "),i("code",[e._v('slot="header"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo3Visible,size:"50%",title:e.text.header},on:{"update:visible":function(t){e.demo3Visible=t}}},[i("div",[i("code",[e._v(' size="50%"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo4Visible,size:"200px",title:e.text.header},on:{"update:visible":function(t){e.demo4Visible=t}}},[i("div",[i("code",[e._v('size="200px"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo5Visible},on:{"update:visible":function(t){e.demo5Visible=t}}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.text.header))]),i("div",[e._v(e._s(e.text.content))]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo6Visible},on:{"update:visible":function(t){e.demo6Visible=t}}},[i("div",[e._v(e._s(e.text.content))]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo7Visible,title:e.text.header},on:{"update:visible":function(t){e.demo7Visible=t}}},[i("div",[e._v(e._s(e.text.content))])]),i("slide-out",{attrs:{visible:e.demo8Visible,"close-on-mask-click":!1,title:e.text.header},on:{"update:visible":function(t){e.demo8Visible=t}}},[i("div",[i("code",[e._v(':close-on-mask-click="false"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo9Visible,title:e.text.header,"disable-animation":""},on:{"update:visible":function(t){e.demo9Visible=t}}},[i("div",[i("code",[e._v("disable-animation")])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo10Visible,title:e.text.header,"mask-color":"rgba(89, 150, 105, 0.5)"},on:{"update:visible":function(t){e.demo10Visible=t}}},[i("div",[i("code",[e._v('mask-color="rgba(89, 150, 105, 0.5)"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo11Visible,title:e.text.header,"show-mask":!1},on:{"update:visible":function(t){e.demo11Visible=t}}},[i("div",[i("code",[e._v(':show-mask="false"')])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo12Visible,title:e.text.header,"append-to":"#customize","lock-scroll":"","allow-resize":""},on:{"update:visible":function(t){e.demo12Visible=t}}},[i("div",[i("div",[i("code",[e._v('append-to="#customize" lock-scroll allow-resize')])]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Element "),i("code",[e._v("#customize")]),i("b",[e._v("SHOULD NOT")]),e._v(" be "),i("code",[e._v("position: static")])]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Resize is available for this instance.")]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[i("code",[e._v("body")]),e._v(" scroll is locked now, close slide to release it.")]),i("p",[i("span",{staticStyle:{color:"red"}},[e._v("<-")]),i("span",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Move the cursor onto this border to have a try")])])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo13Visible,title:e.text.header},on:{"update:visible":function(t){e.demo13Visible=t},open:e.onOpen,close:e.onClose,closed:e.onClosed}},[i("p",[i("code",[e._v('@open="onOpen" @close="onClose" @closed="onClosed"')])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.status,expression:"status === 0"},{name:"lang",rawName:"v-lang"}]},[e._v("I will close after 3 seconds...")]),i("div",{directives:[{name:"show",rawName:"v-show",value:1===e.status,expression:"status === 1"},{name:"lang",rawName:"v-lang"}]},[e._v("I am opened, I will close after 3 seconds while click "),i("code",[e._v("close")]),e._v(" button,\n      and event "),i("code",[e._v("closed")]),e._v(" will be emitted after slide really closed\n    ")])]),i("slide-out",{attrs:{visible:e.demo14Visible,dock:e.position,title:e.text.header,"allow-resize":""},on:{"update:visible":function(t){e.demo14Visible=t},resize:e.onResize}},[i("div",[i("p",[i("code",[e._v('allow-resize @resize="onResize"')])]),i("p",[i("code",[e._v("allow-resize")]),i("span",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("makes it resizable")])]),i("p",[i("code",[e._v('@resize="onResize"')]),i("span",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("makes function "),i("code",[e._v("onResize")]),e._v(" to accept "),i("code",[e._v("resize")]),e._v(" event")])])]),i("div",[e._v("Resize value: "+e._s(e.resizeValue)+"px")]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo15Visible,title:"And God said, let there be light, and there was light"},on:{"update:visible":function(t){e.demo15Visible=t}}},[i("div",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Long header text turns out "),i("b",[e._v("ellipse")]),e._v(" style.")]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo16Visible,title:e.text.header,"ignore-esc":""},on:{"update:visible":function(t){e.demo16Visible=t}}},[i("div",[i("p",[i("code",[e._v("ignore-esc")])]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("This makes slide ignore "),i("code",[e._v("Esc")]),e._v(" key press.")]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("So you can not close slide by press "),i("code",[e._v("Esc")]),e._v(" key.")]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("No matter how many times you press "),i("code",[e._v("Esc")]),e._v(" key, slide will always keep opened.")])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),i("slide-out",{attrs:{visible:e.demo17Visible,title:e.text.header,size:"600px"},on:{"update:visible":function(t){e.demo17Visible=t}}},[i("div",{staticStyle:{"padding-top":"20px"}},[i("input",{staticStyle:{"margin-bottom":"10px",display:"block"},attrs:{type:"text",value:"input"}}),i("textarea",{staticStyle:{"margin-bottom":"10px",display:"block"},attrs:{name:"",id:"",cols:"30",rows:"10"}},[e._v("textarea")]),i("div",{directives:[{name:"lang",rawName:"v-lang"}],staticStyle:{height:"100px",border:"1px solid #CCC"},attrs:{contenteditable:"true"}},[e._v("\n        This is an editable "),i("code",[e._v("DIV")]),e._v(" element with attribute "),i("code",[e._v('contenteditable="true"')])])]),i("p",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("\n      Slide will not close if you press "),i("code",[e._v("Esc")]),e._v(" key in editable element,\n      such as "),i("code",[e._v("input")]),e._v(", "),i("code",[e._v("textarea")]),e._v(",\n      "),i("code",[e._v('div[contenteditable="true"]')])])]),i("div",{staticClass:"demo-block"},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Dock position")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showDemo1("top")}}},[e._v("Top")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showDemo1("right")}}},[e._v("Right")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showDemo1("bottom")}}},[e._v("Bottom")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showDemo1("left")}}},[e._v("Left")])])])]),i("div",{staticClass:"demo-block",attrs:{id:"customize"}},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Customize")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo2Visible=!0}}},[e._v("Header")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo12Visible=!0}}},[e._v("Append to specified element "),i("b",[e._v("#customize")])])]),i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo3Visible=!0}}},[e._v("Size: 50%")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo4Visible=!0}}},[e._v("Size: 200px")])]),i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo5Visible=!0}}},[e._v("No close button")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo6Visible=!0}}},[e._v("No Header")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo7Visible=!0}}},[e._v("No Footer")])]),i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo8Visible=!0}}},[e._v("Disable close on mask click")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo9Visible=!0}}},[e._v("Disable animation")])]),i("li",[i("button",{on:{click:function(t){e.demo10Visible=!0}}},[i("span",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Mask color")]),i("span",{staticStyle:{width:"14px",height:"14px",background:"rgba(89, 150, 105, 0.5)",display:"inline-block","vertical-align":"-2px"}})]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo11Visible=!0}}},[e._v("No Mask")])]),i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo16Visible=!0}}},[e._v("Ignore ESC key press")])])])]),i("div",{staticClass:"demo-block"},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Event")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo13Visible=!0}}},[e._v("Event after open and before close")])])])]),i("div",{staticClass:"demo-block"},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Allow Resize")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showResizeDemo("top")}}},[e._v("Top")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showResizeDemo("right")}}},[e._v("Right")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showResizeDemo("bottom")}}},[e._v("Bottom")]),i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){return e.showResizeDemo("left")}}},[e._v("Left")])])])]),i("div",{staticClass:"demo-block"},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Long header text")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo15Visible=!0}}},[e._v("Long header")])])])]),i("div",{staticClass:"demo-block"},[i("h3",{directives:[{name:"lang",rawName:"v-lang"}]},[e._v("Hot key: Esc")]),i("ul",[i("li",[i("button",{directives:[{name:"lang",rawName:"v-lang"}],on:{click:function(t){e.demo17Visible=!0}}},[e._v("Press Esc in "),i("code",[e._v("editable element")]),e._v(" will not close slide\n        ")])])])])],1)},l=[],r=(i("7f7f"),i("a481"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:e.isVisible&&(e.lockScroll||e.isFixed),expression:"isVisible && (lockScroll || isFixed)"}],staticClass:"vue-slideout",class:e.containerClasses,style:e.containerStyle,attrs:{tabindex:"0"}},[e.showMask?i("div",{staticClass:"vue-slideout-mask",style:e.maskStyle,on:{click:e.onMaskClick}}):e._e(),i("div",{ref:"layout",staticClass:"vue-slideout-layout",style:e.layoutStyle},[e.allowResize?i("div",{staticClass:"vue-slideout-drag-handle",on:{mousedown:e.mouseDownHandler}}):e._e(),e.$slots.header||e.title?i("div",{staticClass:"vue-slideout-header"},[e._t("header",[i("div",{staticClass:"vue-slideout-title-text"},[e._v("\n          "+e._s(e.title)+"\n        ")]),i("button",{staticClass:"vue-slideout-btn-close",on:{click:function(t){return e.toggle(!1)}}},[i("svg",{attrs:{version:"1.1",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"}},[i("path",{attrs:{d:"M493.45411 71.89033 197.751365 361.596502c-9.624195 9.380648-9.624195 24.707728 0 34.138518 9.576099 9.381671 25.222451 9.381671 34.848693 0l253.612115-248.494561 0 786.690176c0 13.3214 11.047614 24.142863 24.642237 24.142863 13.597693 0 24.645306-10.821463 24.645306-24.142863L535.499715 147.240459l253.632581 248.494561c9.603729 9.381671 25.248034 9.381671 34.847669 0 4.836145-4.76349 7.194866-10.939143 7.194866-17.116843 0-6.1777-2.405793-12.355399-7.194866-17.116843L528.255731 71.797209c-9.602705-9.383718-25.244964-9.383718-34.849716 0L493.45411 71.89033z"}})])])],{title:e.title})],2):e._e(),i("div",{staticClass:"vue-slideout-content"},[e._t("default")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$slots.footer,expression:"$slots.footer"}],staticClass:"vue-slideout-footer"},[e._t("footer")],2)])])}),c=[],d=i("bd86"),u=(i("c5f6"),{size:{type:[String,Number],default:400},zIndex:{type:Number,default:1997},visible:{type:Boolean,default:!1},title:{type:String},closeOnMaskClick:{type:Boolean,default:!0},ignoreEsc:{type:Boolean,default:!1},customClass:{type:String},showMask:{type:Boolean,default:!0},maskColor:{type:String,default:null},dock:{type:String,default:"right"},appendTo:{type:[String,HTMLElement],default:null},disableAnimation:{type:Boolean,default:!1},allowResize:{type:Boolean,default:!1},minSize:{type:Number,default:60},maxSize:{type:Number,default:0},lockScroll:{type:Boolean,default:!1}}),v=i("b02f"),m=i.n(v);o["a"].use(m.a);var h={name:"SlideOut",props:u,data:function(){return{isVisible:!1,mousedown:!1,mouseDownPosition:{x:0,y:0},originSize:{width:0,height:0},resizeValue:0,parentElement:null}},watch:{visible:function(e){this.toggle(e)}},computed:{dockOn:function(){return this.dock||"right"},containerStyle:function(){var e={"z-index":this.zIndex};this.mousedown&&(e.userSelect="none");var t=this.isVisible?"0":"100%";switch(this.dockOn){case"left":e.right=t;break;case"right":e.left=t;break;case"top":e.bottom=t;break;case"bottom":e.top=t;break}return e},maskStyle:function(){return this.maskColor?{"background-color":this.maskColor}:{}},layoutStyle:function(){var e={},t=this.resizeValue>0?"".concat(this.resizeValue,"px"):"number"===typeof this.size?"".concat(this.size,"px"):this.size,i=this.isVisible||this.disableAnimation?0:"number"!==typeof this.size&&/%$/.test(this.size)?"".concat(-parseInt(this.size),"%"):"".concat(-parseInt(this.size),"px");switch(this.dockOn){case"right":e.width=t,e.right=i;break;case"left":e.width=t,e.left=i;break;case"bottom":e.height=t,e.bottom=i;break;case"top":e.height=t,e.top=i;break}return e},containerClasses:function(){var e;return e={},Object(d["a"])(e,this.customClass||"",!0),Object(d["a"])(e,"dock-".concat(this.dockOn),!0),Object(d["a"])(e,"visible",this.isVisible),Object(d["a"])(e,"enable-animation",!this.disableAnimation),Object(d["a"])(e,"vue-slideout-show-header",this.title||this.$slots.header),Object(d["a"])(e,"vue-slideout-show-footer",this.$slots.footer),Object(d["a"])(e,"vue-slideout-fixed",this.isFixed),e},isFixed:function(){return!this.appendTo}},methods:{getArgs:function(){var e=this;return{wait:!1,set close(t){t&&e.setVisibleValue(!1)},get close(){}}},toggle:function(e){if(e!==this.isVisible){if(e)return this.setVisibleValue(!0),void this.$emit("open");var t=this.getArgs();this.$emit("close",t),t.wait||this.setVisibleValue(!1)}},setVisibleValue:function(e){this.isVisible!==e&&(e&&(this.resizeValue=0),this.isVisible=e,this.$el.focus(),this.$emit("update:visible",e),e||this.emitCloseEvent())},appendComponentTo:function(){if(this.appendTo){var e=this.appendTo;if("string"===typeof e&&(e=document.querySelector(e),!e))throw new Error("SlideOut 找不到指定的 AppendTo 节点: ".concat(this.appendTo));e.appendChild(this.$el),this.parentElement=e}else this.parentElement=this.$el.parentElement},onMaskClick:function(){this.closeOnMaskClick&&this.toggle(!1)},getParentSize:function(){var e=this.parentElement.getClientRects()[0];return{width:e.width,height:e.height}},getMyOwnSize:function(){var e=this.$refs.layout.getClientRects()[0];return{width:e.width,height:e.height}},mouseDownHandler:function(e){this.mousedown=!0,this.mouseDownPosition={x:e.pageX,y:e.pageY},this.originSize=this.getMyOwnSize()},mouseMoveHandler:function(e){var t=this;if(this.mousedown){var i=e.pageX-this.mouseDownPosition.x,o=e.pageY-this.mouseDownPosition.y,s=this.getParentSize(),n=this.originSize,a=0;switch(this.dock){case"top":a=n.height+o,a>s.height&&(a=s.height);break;case"right":a=n.width-i,a>s.width&&(a=s.width);break;case"bottom":a=n.height-o,a>s.height&&(a=s.height);break;case"left":a=n.width+i,a>s.width&&(a=s.width);break}this.maxSize>0&&this.maxSize<a&&(a=this.maxSize),this.resizeValue=a<this.minSize?this.minSize:a,this.$nextTick(function(){t.$emit("resize",{size:t.resizeValue})})}},mouseUpHandler:function(){this.mousedown=!1},onKeydown:function(e){if(this.isVisible&&(27===e.keyCode||27===e.which)&&-1===["INPUT","TEXTAREA"].indexOf(e.target.tagName)&&"true"!==e.target.contentEditable)return this.toggle(!1),!1},emitCloseEvent:function(){var e=this;this.disableAnimation&&this.$emit("closed"),setTimeout(function(){e.$emit("closed")},318)}},mounted:function(){this.appendComponentTo(),this.allowResize&&(document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("mouseup",this.mouseUpHandler)),this.ignoreEsc||this.$el.addEventListener("keydown",this.onKeydown)},beforeDestroy:function(){this.ignoreEsc||this.$el.removeEventListener("keydown",this.onKeydown),this.allowResize&&(document.removeEventListener("mousemove",this.mouseUpHandler),document.removeEventListener("mouseup",this.mouseMoveHandler)),this.isVisible&&this.setVisibleValue(!1)}},b=h,p=b,f=p,g=(i("919d"),i("2877")),w=Object(g["a"])(f,r,c,!1,null,"312ae89f",null),_=w.exports;function k(e){for(var t in e)e.hasOwnProperty(t)&&(t=t.replace(/-[a-z]/g,function(e){return e[1].toUpperCase()}),_.props.hasOwnProperty(t)&&(_.props[t]["default"]=e[t]))}_.install=function(e,t){t&&k(t),e.component(_.name,_)};var y=_,V={name:"Demo",components:{SlideOut:y},data:function(){return{text:{header:"Here is header",content:"Here is content",footer:"Here is footer"},status:0,resizeValue:0,position:null,demo1Visible:!1,demo2Visible:!1,demo3Visible:!1,demo4Visible:!1,demo5Visible:!1,demo6Visible:!1,demo7Visible:!1,demo8Visible:!1,demo9Visible:!1,demo10Visible:!1,demo11Visible:!1,demo12Visible:!1,demo13Visible:!1,demo14Visible:!1,demo15Visible:!1,demo16Visible:!1,demo17Visible:!1}},methods:{showDemo1:function(e){this.position=e,this.demo1Visible=!0},showResizeDemo:function(e){this.resizeValue=0,this.position=e,this.demo14Visible=!0},onOpen:function(){this.status=1},onClose:function(e){e.wait=!0,this.status=0,setTimeout(function(){e.close=!0},3e3)},onResize:function(e){this.resizeValue=e.size},onClosed:function(){this.$emit("show-tip","Aha, I am really closed")}}},x=V,z=(i("8ce5"),Object(g["a"])(x,a,l,!1,null,"42bac81a",null)),S=z.exports,N={name:"App",components:{Demo:S},data:function(){return{tipVisible:!1,tipText:null}},methods:{onShowTip:function(e){var t=this;this.tipText=e,this.tipVisible=!0,this.$nextTick(function(){setTimeout(function(){t.tipVisible=!1},3e3)})}}},C=N,E=(i("7c55"),Object(g["a"])(C,s,n,!1,null,null,null)),O=E.exports,T=(i("28a5"),i("39aa")),D=window.navigator.languages;function j(){for(var e=0;e<D.length;e++){var t=D[e];if(T.hasOwnProperty(t))return t;if(t=t.split("-")[0],T.hasOwnProperty(t))return t}return"en"}var $=j(),R={inserted:function(e){var t=T[$];if(t){var i=e.innerHTML;i=i.replace(/<(\w+).+?>(.+?)<\/\1>/g,function(e,t,i){return"<".concat(t,">").concat(i,"</").concat(t,">")}),i=i.replace(/[\r\n\s]+/g," ").replace(/^\s*|\s*$/g,""),t.hasOwnProperty(i)&&(e.innerHTML=t[i])}}},M={install:function(e){e.directive("lang",R)}};o["a"].config.productionTip=!1,o["a"].use(M),new o["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c48":function(e,t,i){},"7c55":function(e,t,i){"use strict";var o=i("5c48"),s=i.n(o);s.a},"8ce5":function(e,t,i){"use strict";var o=i("2f7f"),s=i.n(o);s.a},"919d":function(e,t,i){"use strict";var o=i("a61a"),s=i.n(o);s.a},a61a:function(e,t,i){}});
//# sourceMappingURL=app.02e48a6e.js.map
# API 文档

## 属性

#### size (必填)

- 类型 `String/Number/Array`
- 默认值 `400px`

> 显示的尺寸, 可以使用单位`px`和`%`；
> 当为数组时:
> - 第一个值表示宽度，第二个值表示高度;
> 当数组只有一个值时，表示宽度和高度相同
> - 属性 `allowResize`, `minSize`, `maxSize`  值会被忽略

#### zIndex (选填)

- 类型 `Number`
- 默认值 `1997`

> 组件的 `z-index` 值

#### visible  (必填)

- 类型 `Boolean`
- 默认值 `false`

> 是否可见，可使用 `.sync` 修饰

#### title  (可选)

- 类型 `String`
- 默认值 `-`

> 标题文本，如果此属性为空，`slot=header` 也为空,(br/>那么头部会被隐藏

#### closeOnMaskClick  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否在点击遮罩层时关闭

#### customClass  (可选)

- 类型 `String`
- 默认值 `-`

> 自定义的样式类名称

#### showMask  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 遮罩层是否可见

#### showClose  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否显示关闭按钮

#### maskColor  (可选)

- 类型 `String`
- 默认值 `rgba(0, 0, 0, 0.5)`

> 遮罩层的颜色

#### dock  (可选)

- 类型 `String`
- 默认值 `right`

> 停靠位置，可选值为: `top`, `right`, `bottom`, `left`

#### appendTo  (可选)

- 类型 `String/HTMLElement`
- 默认值 `null`

> 设置父元素，可使用字符串(选择器)和(br/>对象(DOM对象)。
> 在未设置`appendTo`时，Slide组件会以`position: fixed`的方式显示

#### disableAnimation  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否禁用显示和隐藏的动画

#### allowResize  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否允许鼠标挺拖动改变尺寸

#### minSize  (可选)

- 类型 `Number`
- 默认值 `60`

> 拖动大小的最小值限制，单位为 `px`

#### maxSize  (可选)

- 类型 `Number`
- 默认值 `0`

> 拖动大小的最大值限制，单位为 `px`， 设置为 `0` 表示不限制

#### ignoreEsc  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否忽略 `Esc` 键，设置为`false`或保持默认值时，按下`Esc`不会关闭

#### fullscreen  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否全屏显示(此时会禁用拖动改变尺寸功能)，可使用 `.sync` 修饰(此时在关闭后会退出全屏)

#### fixed  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否使用 `position: fixed`

#### offset (可选)

- 类型 `Boolean`
- 默认值 `false`

> 距离dock(停靠)边的偏移量，单位可以是`px`或`%` (仅当`size`是数组时生效)

## 插槽

#### header

- 作用域 `{title}`

> 头部内容，使用时会占据整个头部，此时属性`title`会无效，
> 同时也不会显示关闭按钮使用`slot-scope="{ title }"`可以取到属性`title`的值

#### btn

> 头部的扩展部分，放在**关闭按钮**左侧

#### default

> 内容部分

#### footer

> 底部内容

## 事件

#### open

- 参数 `无`

> 在打开后立即调用

#### close

- 参数 e: `{close: Boolean, wait: Boolean}`

> 在关闭前调用,在回调函数内, 设置`e.wait=true` 可以阻止关闭，
> 设置 `e.close=true` 可以继续关闭(支持异步关闭)

#### closed

- 参数 '无'

> 在slide真正关闭后调用,它在事件`close`后才会被触发
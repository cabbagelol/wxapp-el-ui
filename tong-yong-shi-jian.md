# 通用事件

在所用到Elui项目中，我们到会定义公共方法，而"通用事件"便对公共方法下输入器、开关控件，这类交互提供一致数据处理函数，相信你看一遍便能学会。

```html
<el-input value='{{value}}' data-e='value' bindinput='onInput' />
```

这里提供一个data-e的声明，被方便被onInput捕抓。

```js
Page({
  data: {
    value: ''
  },

  /**
  * 输入器
  */
  onInput() {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  /**
  * 开关
  */
  onSwitch(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
})
```

这样你便不需要处理每一个数据，当然form也是可以实现。这类处理函数在原生控件或是Elui控件是支持的。


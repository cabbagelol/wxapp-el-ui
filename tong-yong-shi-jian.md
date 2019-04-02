# 通用事件

在所用到Elui项目中，我们到会定义公共方法，而"通用事件"便对公共方法下输入器、开关控件，这类交互提供一致数据处理函数，相信你看一遍便能学会。

1.创建wxml标签:

```html
<el-input value='{{value}}' data-e='value' bindinput='$' />
```

这里提供一个data-e的声明，方便被onInput捕抓。

2.在公共包内创建通用事件:

```js
module.exports = {
  $(e) {
    try {
      if (!!e.target.dataset.e == false) {
        throw 'The field "data-e" was not found.';
        return;
      }
      this.setData({
        [e.target.dataset.e]: e.detail.value
      })
    } catch (E) {
      console.error(E)
    }
  }
}
```

这样你便不需要处理每一个数据，当然form也是可以实现。

3.导入:

```js
const e = require('public/js/util.js');

Page({
  $: app.e.$,
  
  data: {
    value: ''
  }
})
```






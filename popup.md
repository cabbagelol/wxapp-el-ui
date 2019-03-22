# popup-弹出框

弹出框，可自定义内容。

---

![](/assets/popup01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-popup": "component/_popup/popup"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | ---: |
| position | String | "" | 方向 | 1.0.1 |
| modal | Boolean | true | 遮盖层 | 1.0.1 |
| show | Boolean | false | 是否可见popup | 1.0.1 |
| closeOnModal | Boolean | true | 是否可通过点击遮盖返回bindchange事件 | 1.0.1 |

### 方法

change : function \(e\)

@e.value: 值

@e.el: view

### 使用

```html
<el-popup show='{{popup.show}}' modal='{{popup.modal}}' position='top' bindchange='onPopup'>
  <view slot='content'>
    <!-- do -->
  </view>
</el-popup>
```

```js
page({
  data: {
    "popup": {
      "show": false,
      "modal": true
    }
  },
    
  onPopup () {
    this.setData({
      'popup.show': this.data.popup.show != true
    })
  }
})
```






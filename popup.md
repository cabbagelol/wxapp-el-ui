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
| position | String | center | 方向，left/top/right/button | 0.0.2 |
| modal | Boolean | true | 遮盖层 | 0.0.2 |
| show | Boolean | true | 是否可见popup | 0.0.2 |
| closeOnModal | Boolean | true | 是否可通过点击遮盖返回bindchange事件 | 0.0.2 |
| background | String | rgba\(0, 0, 0, 0.3\) | 遮盖层颜色 | 0.0.4 |

##### position的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| left |  |  |
| right |  |  |
| top |  |  |
| bottom |  |  |
| center |  |  |

### 方法

change : function \(e\)

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| value |  | 值 | 0.0.2 |
| el |  | {} | 0.0.2 |

### 插槽

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| content | 内容插槽 | 0.0.2 - 0.0.3 |

### 使用

```html
<el-popup show='{{popup.show}}' modal='{{popup.modal}}' position='top' bindchange='onPopup'>
  <view>
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

---

### 已知问题

Q: **升0.0.4到后，popup不再显示**

A:在之后popup移除了content插槽，因此不需在slot='content'声明，现在popup的默认插槽便是content。


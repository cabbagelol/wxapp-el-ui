# textarea-多行输入框

文本框-多行

---

![](/assets/textarea01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-textarea": "component/_textarea/textarea"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 1.0.1 |
| placeholder | String | "" | placeholder | 1.0.1 |
| ~~elstyle~~ | ~~String~~ | ~~""~~ | ~~继承style~~ | 1.0.1 - 1.0.1 |
| ~~elclass~~ | ~~String~~ | ~~""~~ | ~~继承class~~ | 1.0.1 - 1.0.1 |
| value\(~~data~~\) | String | "" | 内容 | 1.0.1 |
| wordcount | Number | 0 | 限制与统计,当为0时表示不在限制与统计 | 1.0.1 |

### 事件

`bindinput`: function \(e\) {}

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 事件类型 | 1.0.2 |
| e | Event | 1.0.1 |
| value | 值 | 1.0.2 |

### 使用

```html
<el-textarea title='名称' bindinput='onTextarea'></el-textarea>

<!-- or -->

<el-textarea title='名称' />
```

```js
Page({
    onTextarea (e) {
        // do
    }
})
```

### 已知问题

Q: 我如何捕捉IOS下的点击完成按钮返回的数据？

A: 在textarea控件中，这些数据变动操作都会触发bindinput方法返回，因此你仅关注input事件既可


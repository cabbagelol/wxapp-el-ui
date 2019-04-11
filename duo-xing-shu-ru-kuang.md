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
| title | String | "" | 标题 | 0.0.2 |
| placeholder | String | "" | placeholder | 0.0.2 |
| name | String | "" | 关联form | 0.0.4 |
| value\(~~data~~\) | String | "" | 内容 | 0.0.2 |
| wordcount | Number | 0 | 限制与统计,当为0时表示不在限制与统计 | 0.0.2 |
| vibrate | Boolean | false | 触摸交互 | 0.0.4 |

移除:

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| elstyle | String | "" | 继承style | 0.0.2 - 0.0.2 |
| elclass | String | "" | 继承class | 0.0.2 - 0.0.2 |

### 事件

`bindinput`: function \(e\) {} 输入回调

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 事件类型 | 0.0.3 |
| e | Event | 0.0.2 |
| value | 值 | 0.0.3 |

`bindcopy`: function \(e\) {} 复制成功回调

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| code | 结果，&gt;=0表示成功，-1为失败 | 0.0.4 |
| value | 复制的值 | 0.0.4 |

### 样式

##### 2. 局部

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-textarea | textarea控件样式 | 0.0.3 |
| el-title | 标题 | 0.0.3 |
| el-wordcount | 统计器 | 0.0.3 |

使用方式请参考这里[重写Class类](http://hn.cabbagelol.net/wxapp-el-ui/zhong-xie-class-lei.html)。

### 使用

```html
<el-textarea title='名称' value='{{value}}' bindinput='onTextarea'></el-textarea>

<!-- or -->

<el-textarea title='名称' />
```

```js
Page({
    data: {
        value: ''
    },

    /**
    * 通用的textarea事件(1)
    */
    onTextarea(e) {
        this.setData({
            [e.target.dataset.e]: e.detail.value
        })
    },
})
```

\(1\)[通用事件](/tong-yong-shi-jian.md)

---

### 已知问题

Q: 我如何捕捉IOS下的点击完成按钮返回的数据

A: 在textarea控件中，这些数据变动操作都会触发bindinput方法返回，因此你仅关注input事件既可。


# message-全局消息

消息容器

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-message": "component/_message/message"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| type | String | "" | 消息类型，若为空背景为白色。 | 1.0.2 |
| icon | Boolean | false | 消息是否显示图标 | 1.0.2 |

### 插槽

默认卡槽:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| - | 默认插槽在cont的前面 | 1.0.2 |

### 事件

`onMessage`:function \(data\) {} 需在onload中注册this.selectComponent\(""\)来获取message内部事件。

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 1.0.2 |
| cont | String | "" | 内容 | 1.0.2 |
| time | Number | 3000 | 显示时间 | 1.0.2 |
| sicceed | event | function | 当显示成功时触发该事件。 | 1.0.2 |

### 使用

```html
<el-message class='messgae' icon='{{false}}'>
    <el-tag>消息</el-tag>
</el-message>
```

```js
Page({
    onLoad () {
        this.messgae = this.selectComponent(".messgae");
    },
    
    onMessageShow () {
      var that = this;
      that.messgae.onMessage({
        cont: that.data.message.cont + new Date().getTime(),
        time: that.data.message.time,
        succeed () {
          wx.showToast({
            title: '成功',
            icon: 'none'
          })
        }
      })
    }
})
```




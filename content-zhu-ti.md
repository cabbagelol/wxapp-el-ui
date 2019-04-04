# body-主体

通用的主体布局,为页面提供head/body/footer，支持微信的map这类控件放置在body中

---

![](/assets/body01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-vacancy": "component/_vacancy/vacancy"
    }
}
```

body控件会对head和footer识别，计算出中间区域的适配高度。

### 事件

`bindready`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| body | 当body准备好时返回head/body/footer对应高度，scrollButtonY为滚动最底部位置 | 0.0.3 |

`onMessage`: function \(data\) {} 该事件是由message控件提供，因此body会依赖message，详细属性参数参考[message](/message-quan-ju-xiao-xi.md)控件.

```js
Page({
  // 必须在Ready后执行
  onReady () {
    var body = this.selectComponent(".body");
    body.data.message.onMessage({
      cont: '内容',
      time: 3000,
        wx.showToast({
          title: '成功',
          icon: 'none'
        })
      }
    })
  },
})
```

### 插槽

导航栏插槽:

```html
<el-body>
    <view slot='head'>
        <!-- do -->
    </view>
</el-body>
```

主体内容插槽:

```html
<el-body>
    <view slot='body'>
        <!-- do -->
    </view>
</el-body>
```

页脚插槽:

```html
<el-body>
    <view slot='footer'>
        <!-- do -->
    </view>
</el-body>
```

### 使用

```html
<el-body>

  <el-head slot='head' head='{{head}}' stickie='true'></el-head>

  <view slot='body'>
    <view wx:for='{{100}}' >{{index}}</view>
  </view>

  <el-head slot='head' head='{{head}}' ></el-head>

</el-body>
```

### 依赖

| 名称 | 版本 |
| :--- | :--- |
| message | 0.0.3 |



# body-主体

通用的主体布局,为页面提供head/body/footer，支持微信的map这类控件放置在body中

---

| ![](/assets/body01.png) |
| :---: |


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

### 属性

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| scrollY | 纵轴 | 1.0.2 |
| rubber | 橡皮筋，支持android与ios | 1.0.2 |
| upperThreshold | 顶距最大下拉距离，当0时为默认 | 1.0.2 |
| lowerThreshold | 底距最大上拉距离，当0时为默认,默认最大值无限 | 1.0.2 |
| animation | 动画时间，取值在0到无限，1000为一秒，建议设置200 | 1.0.2 |

### 事件

`bindscroll`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| ~~scrollX~~ | ~~横轴\(预留\)~~ | ~~1.0.2~~ |
| scrollY | 纵轴 | 1.0.2 |

`bindready`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| body | 当body准备好时返回head/body/footer对应高度，scrollButtonY为滚动最底部位置 | 1.0.2 |
| scrollY | T轴滚动位置 | 1.0.2 |

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




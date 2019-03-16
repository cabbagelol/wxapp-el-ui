# refresh-下拉刷新

下拉刷新容器

---

| ![](/assets/refresh01.png)![](/assets/refresh02.png) |
| :---: |


## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-refresh": "component/_refresh/refresh"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| backgroundColor | String | \#000 | 下拉刷新背景颜色 | 1.0.1 |
| refreshHeight | Number | 150 | 下拉刷新高度 | 1.0.1 |
| textColor | String | white | 下拉刷新字体颜色 | 1.0.1 |

### 事件

`bindonRefresh`: function \(\) {}

```
具体参考使用方法
```

### 使用

```html
<el-refresh id='refresh' backgroundColor="#FFF" bindonRefresh="onPullDownRefresh" />

<view class="container" bindtouchstart='handletouchstart' bindtouchmove='handletouchmove' bindtouchend='handletouchend' bindtouchcancel='handletouchcancel'>
  <el-cell title='消息' wx:for='{{50}}' wx:key='{{item}}' islink></el-cell>
</view>
```

```js
page({
  onLoad() {
    this.refreshView = this.selectComponent("#refresh")
  },
  
  //触摸开始
  handletouchstart(event) {
    this.refreshView.handletouchstart(event)
  },
  
  //触摸移动
  handletouchmove(event) {
    this.refreshView.handletouchmove(event)
  },
  
  //触摸结束
  handletouchend(event) {
    this.refreshView.handletouchend(event)
  },
  
  //触摸取消
  handletouchcancel(event) {
    this.refreshView.handletouchcancel(event)
  },
  
  //页面滚动
  onPageScroll(event) {
    this.refreshView.onPageScroll(event)
  },
  
  onPullDownRefresh() {
    setTimeout(() => {
      this.refreshView.stopPullRefresh()
    }, 3000)
  }
})
```

完整使用案例以wxapp-el-ui演示小程序为准.


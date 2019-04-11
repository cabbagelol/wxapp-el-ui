# rolling-滚动载体

滚动载体

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-rolling": "component/_rolling/rolling"
    }
}
```

### 属性

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| scrollY | 纵轴 | 0.0.3 |
| rubber | 橡皮筋，支持android与ios | 0.0.3 |
| upperThreshold | 顶距最大下拉距离，当0时为默认 | 0.0.3 |
| lowerThreshold | 底距最大上拉距离，当0时为默认,默认最大值无限 | 0.0.3 |
| animation | 动画时间，取值在0到无限，1000为一秒，建议设置200 | 0.0.3 |

### 事件

`bindscroll`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| scrollY | 纵轴 | 0.0.3 |

`bindready`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| scrollY | T轴滚动位置 | 0.0.3 |

### 使用

```html
<el-rolling animation='200' scrollbar='{{rolling.scrollbar}}' upperThreshold='{{rolling.upperThreshold}}' lowerThreshold='{{rolling.lowerThreshold}}' fullscreen='{{rolling.autoFullscreenf}}' rubber='{{rolling.rubber}}' isscroll='{{rolling.isscroll}}'
    scrollY='{{rolling.y}}' bindscroll='onScroll' bindready='onScrollReady' class='rolling-body'>   
    
     <!-- do --> 
</el-rolling>
```

```js
Page({
  data: {
    head: {
      title: '滚动',
      back: true
    },
    rolling: {
      isscroll: true,
      scrollbar: true,
      scrollButtonY: 0,
      upperThreshold: 100,
      lowerThreshold: 100,
      autoFullscreenf: true,
      rubber: true,
      y: 0,
      tap: {
        y: -200
      }
    }
  },
  
  onScrollReady (e) {
    this.setData({
      'rolling.scrollButtonY': e.detail.scrollButtonY
    })
  },

  onScroll(e) {
    this.setData({
      'rolling.y': e.detail.scrollY
    })
  },
  
})
```




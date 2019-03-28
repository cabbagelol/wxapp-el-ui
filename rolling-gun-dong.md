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
| scrollY | 纵轴 | 1.0.2 |

`bindready`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| scrollY | T轴滚动位置 | 1.0.2 |

### 使用




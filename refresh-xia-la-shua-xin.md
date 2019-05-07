# refresh-下拉刷新 {#refresh-下拉刷新}

下拉刷新容器

---

![](/assets/refresh01.png)

## 使用指南 {#使用指南}

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-refresh": "component/_refresh/refresh"
    }
}
```

### 属性 {#属性}

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| backgroundColor | String | \#000 | 下拉刷新背景颜色 | 0.0.2 |
| refreshHeight | Number | 150 | 下拉刷新高度 | 0.0.2 |
| textColor | String | white | 下拉刷新字体颜色 | 0.0.2 |

### 事件 {#事件}

0.0.4之前其他事件在0.0.5版本中发生变更，因此除下方事件都已被移除\(文档不在描述它们\)。

`bindchange`: function \(data\_\) {} 下拉控件变动 \| 0.0.5

| 名称 | 描述 | 版本 |
| :--- | :--- | :--- |
| data\_.start | 下拉刷新状态 | 0.0.5 |

##### data\_.start的值:

| 名称 | 描述 | 版本 |
| :--- | :--- | :--- |
| -1 | 闭合时 | 0.0.5 |
| 0 | 默认 | 0.0.5 |
| 1 | 下拉时 | 0.0.5 |
| 2 | 松开时 | 0.0.5 |

`bindrefresh`: function \(\) {} 刷新 \| 0.0.5

### 使用 {#使用}

```html
<el-refresh class='refresh' bindchange='onRefreshEvent' bindrefresh='onPullRefresh' refreshHeight='150'>
    <!-- 滑动区域 -->
    <view wx:if='{{refresh.load}}'>
        <el-load/>
    </view>
</el-refresh>
```

```js
Page({
  "data": {
    "refresh": {
      "load": false
    }
  },

  /**
   * 内部刷新状态变动
   */
  onRefreshEvent (value_) {
    console.log(value_.detail)
  },

  /**
   * 处于设置refreshHeight的值触发刷新
   */
  onPullRefresh() {
    var that = this;
    console.log('onPullRefresh')
    that.setData({
      'refresh.load': true
    })
    setTimeout(() => {
      that.setData({
        'refresh.load': false
      })
      that.refreshView.stopPullRefresh();
    }, 2000);
  },
})
```




# cellswipe-滑动单元格

滑动单元格

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-cellswipe": "component/_cellswipe/cellswipe"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color | String | "inherit" | 橡皮筋区域背景颜色，未设置时橡皮筋也不会生效 | 0.0.3 |
| show | String | '' | 初始显示区域，前提插槽存在，否则一样无效，默认状态下表示空字符串既可 | 0.0.3 |

### 插槽

待显示左侧区域:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| left | 待显示区域 | 0.0.3 |

中间区域:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| cont\(建议存在一个cont的插槽\) | 主要内容,可以不使用该卡槽，这样便无意义了。 | 0.0.3 |

待显示有侧区域:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| right | 待显示区域 | 0.0.3 |

该控件插槽使用参考下方"[使用](#shiyon)"一栏。

### 事件

`bindchange`: function \(e\) {} \| 0.0.3

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 控件名称 | 0.0.3 |
| show | 触发显示方向，分别左、右、默认，字符串表示为left、""、right | 0.0.3 |

### 使用 {#shiyon}

```html
<el-cellswipe>
    <view slot='left'>
        <!-- 左边内容 -->
    </view>
    <view slot='cont'>
        <!-- 主要内容 -->
    </view>
    <view slot='right'>
        <!-- 右边内容-->
    </view>
</el-cellswipe>
```




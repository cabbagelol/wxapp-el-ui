# cellswipe

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
| color | String | "inherit" | 橡皮筋区域背景颜色，未设置时橡皮筋也不会生效 | 1.0.2 |
| show | String | '' | 初始显示区域，前提插槽存在，否则一样无效，默认状态下表示空字符串既可 | 1.0.2 |

### 插槽

### 

### 事件

`bindchange`: function \(e\) {}

@e.detail

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 控件名称 | 1.0.2 |
| show | 触发显示方向，分别左、右、默认，字符串表示为left、""、right | 1.0.2 |

### 使用

```
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




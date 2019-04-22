# load-装载与加载符

装载器与加载符，加载符支持官方的icon.

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-load": "component/_load/load",
      "el-loading": "component/_loading/loading"
    }
}
```

### &lt;el-load&gt; 加载符

### **属性**

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| size | String | "" | 加载图标大小, 1为正常大小，建议在0.1-10，小于0时将不可见 | 0.0.2 |
| type | String | “” | 加载类型,[参考type的合法值](#type的合法值) | 0.0.2 |
| color | Object | {} | 主色调、副色调 | 0.0.3 |

##### color的属性:

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| essential | String | "" | 基本色调，主色 | 0.0.3 |
| deputy | String | rgba\(0,0,0,.06\) | 副色 | 0.0.3 |

##### type的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| line | 二点加载 | 0.0.2 |
| main | 环形加载 | 0.0.2 |
| location | 位置加载 | 0.0.4 |
| circular | - | 0.0.3 - 0.0.3 |
| \* | 小程序icon，[请转这里查看](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html#icon) | 0.0.4 |

### 使用

```html
<!-- 省略使用 -->
<el-load />

<el-load color="{{color}}" type="main" size=".6"></el-load>
```

```
Page({
    data: {
        color: {
            essential: '',
            deputy: ''
        }
    }
})
```

### &lt;el-loading&gt; 装载器

装载器与加载符没有任何血缘关系，但装载器依赖于加载符。

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| show | Boolean | false | 是否可见加载符 | 0.0.4 |
| maskbackground | String | rgba\(0,0,0,.8\) | 遮盖层颜色 | 0.0.4 |
| \* | - | - | 其他属性直接继承于load加载符。 | 0.0.4 |

### 使用

```html
<el-loading show='{{true}}' size=".6">
    <!-- 将装载器包裹需要显示加载区域 -->
    <el-cell wx:for='{{3}}' wx:key='{{index}}'></el-cell>
</el-loading>
```

### 依赖

| 名称 | 版本 |
| :--- | :--- |
| load | 0.0.4 |




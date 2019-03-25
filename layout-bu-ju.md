# layout-布局

布局容器，含el-row与el-column标签，提供elui控件适配

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-layout": "component/_layout/layout",
      "el-row": "component/_row/row"
      "el-column": "component/_column/column"
    }
}
```

layout对所适配控件做出对应处理排版，特别在使用el-row或el-column组合下，以防止布局超出预想状态。目前支持适配`el-body`、`el-button`、`el-cell`、`el-vacancy`、`el-row`、`el-column` 。

layout并非一定使用，可单独使用row和column

### 使用

```html
<el-layout>
    <el-row></el-row>
    <el-column></el-column>
</el-layout>
```

## &lt;el-row&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align | String | start | 垂直对齐，start、center、end | 1.0.2 |

### 使用

```html
<el-row>
 <view>文本</view>
</el-row>
```

## &lt;el-column&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align | String | start | 水平对齐，start、center、end | 1.0.2 |

### 标签

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-column-1 | 等比例1 | 1.0.2 |
| el-column-2 | 等比例2 | 1.0.2 |
| el-column-3 | 等比例3 | 1.0.2 |
| el-column-4 | 等比例4 | 1.0.2 |
| el-column-5 | 等比例5 | 1.0.2 |
| el-column-xs | 固定尺寸标签,占有20% | 1.0.2 |
| el-column-sm | 固定尺寸标签,占有40% | 1.0.2 |
| el-column-sub | 固定尺寸标签,占有50% | 1.0.2 |
| el-column-lg | 固定尺寸标签,占有60% | 1.0.2 |
| el-column-xl | 固定尺寸标签,占有80% | 1.0.2 |

### 使用

```html
<el-column>
    <!-- 等比尺寸 -->
    <el-column-1> 1 </el-column-1>

    <!-- 固定尺寸 -->
    <el-column-xs>20%</el-column-xs>
</el-columnt>
```




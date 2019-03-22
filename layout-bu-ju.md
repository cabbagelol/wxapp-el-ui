# layout-布局

布局容器，含el-row与el-column

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

layout对所适配控件做出对应处理排版，特别在使用el-row或el-column组合下，以防止布局超出预想状态。目前支持适配`el-body`、`el-button`、`el-cell`、`el-vacancy`、`el-row`、`el-column`

## &lt;el-row&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| align | String | start | 垂直对齐，start、center、end | 1.0.2 |

### 使用

```html
<el-row>

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
| &lt;el-column-1&gt; | 等比例标签，从1-5 | 1.0.2 |
| &lt;el-column-\*&gt; | 固定尺寸标签，从xs&gt;sm&gt;sub&gt;lg&gt;xl小到大 | 1.0.2 |

### 使用

```html
<el-column>
    <el-column-1> 1 </el-column-1>
    
    <el-column-xs>20%</el-column-xs>
</el-columnt>
```

### &lt;el-layout&gt;

### 使用

```html
<el-layout>
    <el-row>
    </el-row>

    <el-column>
    </el-column>
</el-layout>
```




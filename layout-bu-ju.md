# layout-布局

布局容器，对Elui控件做适配

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-layout": "component/_layout/layout"
    }
}
```

layout对所适配控件对应处理排版，特别在使用el-row或el-column组合下，以防止布局超出预想状态。

目前支持适配`el-body`、`el-button`、`el-vacancy`、。。。



详细排版请阅读el-row和el-column

### 使用

```html
<el-layout>
    <el-row>
    </el-row>
    
    <el-column>
    </el-column>
</el-layout>
```




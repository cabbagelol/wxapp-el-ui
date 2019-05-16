# tag-标签

标签

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-tag": "component/_tag/tag"
    }
}
```

### &lt;el-tab&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color | String | 继承 | 背景演示 | 0.0.3 |
| size | String | 5号 | 大小 | 0.0.3 |
| plain | Boolean | false | 幽灵 | 0.0.3 |
| round | Boolean | false | 圆角 | 0.0.3 |
| textColor | String | "" | 文本颜色 | 0.0.3 |
| value | String | "" | 值 | 0.0.6 |

### 使用

```html
<el-tag slot='content' size='5' color='#F57724' textColor='#FFF' plain round>
    背景颜色
</el-tag>
```

### &lt;el-tab-content&gt;

### 使用

```html
<el-tag>
    <el-tag-content>

    </el-tag-content>
</el-tag>
```

---

### 已知问题

Q: **tag插槽使用模板语法，未更新问题**

A: 受官方设置影响，插槽内使用的模板语法无会更新，在静态且组合模式下推荐使用插槽，当动态值时应当使用value属性来代替，value属性无法使用任何标签。




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

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| color | String | 继承 | 背景演示 | 0.0.3 |
| size | String | 5号 | 大小 | 0.0.3 |
| plain | Boolean | false | 幽灵 | 0.0.3 |
| round | Boolean | false | 圆角 | 0.0.3 |
| textColor | String | "" | 文本颜色 | 0.0.3 |

### 使用

```html
<el-tag slot='content' size='5' color='#F57724' textColor='#FFF' plain round>
    背景颜色
</el-tag>
```




# rule-页底提示

页底提示

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-rule": "component/_rule/rule"
    }
}
```

### 使用

```html
<el-rule rule='{{rule}}'></el-rule>
```

```js
Page({
  data: {
    rule: {
      lines: {
        color: "#E3E3E3",
        width: 20,
        height: 1
      },
      font: {
        color: "#555",
        margin: 10,
        size: 15
      }
    }
  }
})
```




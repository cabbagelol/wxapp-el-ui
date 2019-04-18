# tip-提示

提示

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-tip": "component/_tip/tip"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| type | String | success | 提示类型 | 0.0.5 |
| border | Boolean | true | 边框 | 0.0.5 |

##### type的合法值

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| success | 成功 | 0.0.5 |
| warning | 警告 | 0.0.5 |
| dange | 严重 | 0.0.5 |

### 使用

```html
<el-tip type='success'></el-tip>
```




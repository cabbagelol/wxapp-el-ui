# load-装载

加载器，它的基础由CSS组成，暂不支持SVG以及Image。

---

![](/assets/load01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-load": "component/_load/load"
    }
}
```

### **属性**

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| size | String | 加载图标大小, 1为正常大小，建议在0.1-10，小于0时将不可见 | 1.0.1 |
| type | String | 加载类型 `line` 或 `main` | 1.0.1 |
| color | Object | 主色调、副色调 | 1.0.2 |

### 使用

```html
<!-- 省略使用 -->
<el-load />

<el-load type="main" size=".6"></el-load>
```

---




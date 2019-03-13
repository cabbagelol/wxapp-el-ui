# load-装载

加载器，它的基础由CSS组成，暂不支持SVG以及Image。

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-load": "component/_load/load"
    }
}
```

#### **属性**

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| size | String | 加载图标大小, 1为正常大小，建议在0.1-10，小于0时将不可见 | 1.0.1 |
| type | String | 加载类型 `line` 或 `main` | 1.0.1 |

\* 不提供size属性时自动适配大小

#### 使用

```html
<!-- 省略使用 -->
<el-load />

<el-load type="main" size=".6"></el-load>
```

---

![Image text](http://cdn.cabbagelol.net/wxapp-coms-load.png)  
\(Load组件，目前仅支持二种加载图片，参考上方图片\)


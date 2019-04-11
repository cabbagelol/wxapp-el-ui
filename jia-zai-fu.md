# load-装载

加载器，支持官方的icon

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
| size | String | 加载图标大小, 1为正常大小，建议在0.1-10，小于0时将不可见 | 0.0.2 |
| type | String | 加载类型,[参考type的合法值](#type的合法值) | 0.0.2 |
| color | Object | 主色调、副色调 | 0.0.3 |

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

<el-load type="main" size=".6"></el-load>
```

---




# load-装载

加载器，它的基础由CSS组成，暂不支持SVG以及Image。

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

| 名称 | 类型 | 说明 |
| :--- | :---: | :--- |
| size | String | 加载图标大小 |
| type | String | 加载类型 `line` 或 `main` |

---

![Image text](http://cdn.cabbagelol.net/wxapp-coms-load.png)  
\(Load组件，目前仅支持二种加载图片，参考上方图片\)


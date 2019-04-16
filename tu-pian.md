# img-图片

图片容器，对图片自动适配大小，当图片不可用时自动替换为默认图。

---

![](/assets/img01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-img": "component/_img/img"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| src | String | 当src不传时将指向控件根目录下默认图片 | 图片地址，支持网络地址以及本地地址placeholder | 0.0.2 |
| placeholder | String | "" | 图片占位图，当src为空时显示的占位图，这里将传入占位图的地址，若不设置那边取img控件跟目录下的images/图片 | 0.0.2 |
| style | String | "" | 允许自定义样式 | 0.0.2 |
| mode | String | aspectFill | [https://developers.weixin.qq.com/miniprogram/dev/component/image.html，控件默认是aspectFill](https://developers.weixin.qq.com/miniprogram/dev/component/image.html，控件默认是aspectFill) | 0.0.2 |
| lazyload | Boolean | false |  | 0.0.2 |
| arialabel | String |  |  | 0.0.2 |
| loadtype | String | “” | 加载符类型，参考[load](/jia-zai-fu.md)控件的type属性 | 0.0.5 |
| loadcolor | Object | {} | 加载符颜色，参考[load](/jia-zai-fu.md)控件的color属性 | 0.0.5 |

### 事件

`bindload`: function \(e\) {}

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 执行类型 | 0.0.5 |
| height | 图片高度 | 0.0.5 |
| width | 图片宽度 | 0.0.5 |
| url | 图片地址 | 0.0.5 |

`binderror`: function \(e\) {}

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| type | 执行类型 | 0.0.5 |
| height | 图片高度 | 0.0.5 |
| width | 图片宽度 | 0.0.5 |
| url | 图片地址 | 0.0.5 |

### 使用

```html
<el-img src="https://" />

<el-img src="https://"></el-img>
```

### 依赖

| 名称 | 版本 |
| :--- | :--- |
| loading | 0.0.5 |




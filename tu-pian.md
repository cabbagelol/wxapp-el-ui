# img-图片

图片容器，对图片自动适配大小，可作为图片占用符。

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-img": "component/_img/img"
    }
}
```

#### 属性:

| 名称 | 类型 | 默认 | 说明 |
| :--- | :---: | :--- | :--- |
| src | String | 当src不传时将指向控件根目录下默认图片 | 图片地址，支持网络地址以及本地地址placeholder |
| placeholder | String | "" | 图片占位图，当src为空时显示的占位图，这里将传入占位图的地址，若不设置那边取img控件跟目录下的images/图片 |
| style | String | "" | 允许自定义样式 |
| mode | String | aspectFill | [https://developers.weixin.qq.com/miniprogram/dev/component/image.html，控件默认是aspectFill](https://developers.weixin.qq.com/miniprogram/dev/component/image.html，控件默认是aspectFill) |
| lazyload | Boolean | false |  |
| arialabel | String |  |  |

* 以上，除了事件外都基本可获得，由于已将image封装不需再继续关注error和load事件，如果需要请直接使用image控件。
* 独立CSS

#### 使用

```html
<el-img src="https://" />

<el-img src="https://"></el-img>
```




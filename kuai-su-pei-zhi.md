# 介绍

小程序组件库，仅适用微信小程序。若有疑问请提交到Issues中。

该组件目前处于分离状态中，不适合立即投入使用。

## 快速配置

在之前你应该阅读[微信自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)文档。根目录执行：

```
  npm install wxapp-el-ui
  # or
  git clone https://github.com/cabbagelol/wxapp-el-ui.git
```

将`component`与`style`文件夹拷贝到自己的项目中，依照下方教程方式使用组件。

1.在app.json或当前page.json文件中配置`usingComponents`参数。

```json
"usingComponents": {
  "el-head": "component/_head/head"
}
```

2.在wxml中使用组件：

```html
<el-head head="{{head}}"></el-head>
```

## Elui演示小程序

目前elui未上架，因此你需要单独将[项目](https://github.com/cabbagelol/wxapp-el-ui/)克隆，你仅需导入到微信编译器中即可。

* 请别忘记设置测试appid




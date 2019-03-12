<h1 align="center">
  <p align="center">wxapp-el-ui</p>
</h1>

# 介绍
小程序组件库，仅适用微信小程序。若有疑问请提交到Issues中。

该组件目前处于分离状态中，不适合立即投入使用。

# 快速配置
在之前你应该阅读[微信自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)文档。根目录执行：
```
  npm install wxapp-el-ui
  # or
  git clone https://github.com/cabbagelol/wxapp-el-ui.git
```
将`component`与`style`文件夹拷贝到自己的项目中，依照下方教程方式使用组件。

1.在page.json文件中配置`usingComponents`参数。
```json
"usingComponents": {
  "el-head": "component/_head/head",
  images: images,
  "el-load": "component/_load/load",
  "el-cell": "component/_cell/cell"
}
```
2.在wxml中使用组件：
```html
    <el-head head="{{head}}"></el-head>
```

关于更多的教程与使用，请参考https://github.com/cabbagelol/wxapp-el-ui/tree/docs它的文档

# 组件状况
- [x] `head`
- [x] `img`
- [x] `cell`
- [x] `load`
- [ ] `input`
- [ ] `numIndicator`
- [ ] `radio`
- [ ] `button`

* 工程还处于统配中，仅小部分组件被共享
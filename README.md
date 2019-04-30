# 介绍
小程序组件库，仅适用微信小程序。若有疑问请提交到Issues中。

群：586394214

# 快速配置
在之前你应该阅读[微信自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)文档。根目录执行：
```
$ pm install wxapp-el-ui
# 或
$ git clone https://github.com/cabbagelol/wxapp-el-ui.git (建议)
```
将`component`与`style`文件夹拷贝到自己的项目中，依照下方教程方式使用组件。

1.在page.json文件中配置`usingComponents`参数。
```json
"usingComponents":{
  "el-head": "component/_head/head"
}
```
2.在wxml中使用组件：
```html
    <el-head head="{{head}}"></el-head>
```

关于更多的教程与使用，请参考http://hn.cabbagelol.net/wxapp-el-ui
<h1 align="center">
  <p align="center">wxapp-commponets</p>
</h1>

# 介绍
小程序组件库，仅适用微信小程序。
若有疑问，请联系nickmiku@foxmail.com或者提交到帖子中

# 如何使用
在所需小程序页面中的.json文件配置`usingComponents`参数，关于详细规则参考[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)。

      "usingComponents": {
        "el-head": "./component/_head/head"
      }
      
在wxml中插入<el-head head='{{head}}' />既可使用。      

# 组件状况
- ✔ Nav `导航`

Nav提供了自定义卡槽与Nav基础样式，它将自动适配刘海与非刘海屏幕高度，保证一致性。

![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav1.png)
![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav2.png)

属性:

名称 | 类型
------------ | -------------
head | Object
stickie | Boolean


head包含:

      {
           title: '导航二',        // 导航标题
           style: {                 // 导航样式
             background: 'red',
             textColor: '#fff'
           },
           back: true               // 是否可返回
      }

nav卡槽:

名称 | 说明
------------ | -------------
nav-left | 左侧卡槽
nav-title | 中间卡槽
nav-right | 右侧卡槽

* 使用nav-title卡槽时应当将title设置为""，否则将出现重复的标题。
使用例子:

         <el-head head='{{head}}'>
            <view slot='nav-tit'>
                <text style='color:red'>自定义</text>标题
            </view>
         </el-head>
   
- - -
- ✔ Img `图片`

Img组件自动适配图片，限制在所设置大小之内。

属性:

名称 | 类型 | 说明
------------ | ------------- | -------------
src | String |  图片地址，支持网络地址以及本地地址
style | String | 允许自定义样式
~~imageslim~~ | ~~Boolean~~ | -

- - -
- ✔ Load `加载图标`

![Image text](http://cdn.cabbagelol.net/wxapp-coms-load.png)

Load组件，目前仅支持二种加载图片，参考上方图片。

属性:

名称 | 类型 | 说明
------------ | ------------- | -------------
size | String | 加载图标大小
type | String | 加载类型 `line` 或 `main`


- - -
- ✔ Nav `导航`

- - -
- ✔ Cell
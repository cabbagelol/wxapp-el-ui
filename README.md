<h1 align="center">
  <p align="center">wxapp-commponets</p>
</h1>

# 介绍
小程序组件库，仅适用微信小程序。若有疑问请提交到Issues中。

# 快速配置
在page.json文件中配置`usingComponents`参数，在此之前你应该更多的阅读[微信自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)的文档。

```json
"usingComponents": {
  "el-head": "./component/_head/head",
  "el-img": "./component/_img/img"
  "el-load": "./component/_load/load"
  "el-cell": "./component/_cell/cell"
}
```

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

<br><br><br><br>

## 导航

导航控件提供了不同位置卡槽与导航栏基础样式，它将自动适配刘海与非刘海屏幕以及android或ios状态栏高度，确保不同设备一致。

![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav1.png)
![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav2.png)

#### 属性:

名称 | 类型 | 描述
------------ | ------------- | -------------
head | Object | head参数属于Object对象，内部可规定导航控件样式、是否允许返回、标题内容等等基础设定
stickie | Boolean| 悬浮置顶(单同时出现若干导航控件，会出现遮盖问题)

##### head属性包含:
```json
  {
       title: '导航二',         // 导航标题
       style: {                 // 导航样式
         background: 'red',     // 背景颜色，支持透明
         textColor: '#fff'      // 字体颜色
       },
       back: true               // 是否可返回
  }
```
#### 插槽:

名称 | 说明
------------ | -------------
nav-left | 左侧卡槽
nav-title | 中间卡槽
nav-right | 右侧卡槽

* 使用nav-title卡槽时应当将title设置为""，否则将出现重复的标题。
使用例子:
```html
     <el-head head='{{head}}'>
        <view slot='nav-tit'>
            <text style='color:red'>自定义</text>标题
        </view>
     </el-head>
```
* 在全屏模式下，使用nav-right右侧卡槽会被微信右侧固有按钮遮挡
* 在nav左右卡槽都设置时，title占有空间被占用，标题超出部分将省略号表示
   
## 图片

图片组件自动适配图片大小，限制在所设置大小之内。

属性:

名称 | 类型 | 说明
------------ | ------------- | -------------
src | String |  图片地址，支持网络地址以及本地地址
style | String | 允许自定义样式
~~imageslim~~ | ~~Boolean~~ | -

## load
![Image text](http://cdn.cabbagelol.net/wxapp-coms-load.png)

Load组件，目前仅支持二种加载图片，参考上方图片。

属性:

名称 | 类型 | 说明
------------ | ------------- | -------------
size | String | 加载图标大小
type | String | 加载类型 `line` 或 `main`

## Cell
要显示列表，链接或表单的单元格。

#### 属性:

名称 | 类型 | 描述
------------ | ------------- | -------------
title | String | cell标题
label | String| 副标题
icon | String| 是否允许可见图标
islink | Boolean | 箭头

#### 插槽:
Cell仅提供了一个卡槽位置，使用如下:
```html
    <el-cell title="默认卡槽">
        <view slot="content">内容</view>
    </el-cell>
```
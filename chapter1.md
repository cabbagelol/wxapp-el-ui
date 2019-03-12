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
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
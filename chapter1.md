# Head-导航栏

特性适配移动设备刘海与非刘海屏幕，自动应对不同状态栏高度，基本确保不同移动设备一致表现，并提供相应插槽。

## 使用指南

在page.json中引入组件

```json
{
    "navigationStyle": "custom",
    "usingComponents": {
      "el-head": "component/_head/head"
    }
}
```

```
* 如果你希望代替掉原有的导航栏，应当添加"navigationStyle": "custom"参数设置全屏。
```

#### 属性:

| 名称 | 类型 | 描述 |
| :--- | :---: | :--- |
| head | Object | head参数属于Object对象，内部可规定导航控件样式、是否允许返回、标题内容等等基础设定 |
| stickie | Boolean | 悬浮置顶\(单同时出现若干导航控件，会出现遮盖问题\) |

##### head属性包含:

```json
{
     "title": "导航二",         // 导航标题
     "style": {                 // 导航样式
       "background": "red",     // 背景颜色，支持透明
       "textColor": "#FFF"      // 字体颜色
     },
     "back": true               // 是否可返回
}

* 当某参数缺省时，会被默认参数所弥补，请查阅属性表格
```

| 名称 | 类型 | 默认状态 | 描述 |
| :--- | :--- | :--- | :--- |
| title | String | "" | 标题 |
| style | Object | {} | 含background/textColor |
| background | String | "" | 默认状态下将直接继承父容器属性 |
|  |  |  |  |
| textColor | String | "" | 默认状态下将直接继承父容器属性 |
| back | Boolean | false | 是否可见返回上一页按钮 |

#### 插槽:

| 名称 | 说明 |
| :--- | ---: |
| nav-left | 左侧卡槽 |
| nav-title | 中间卡槽 |
| nav-right | 右侧卡槽 |

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

---

![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav1.png)![Image text](http://cdn.cabbagelol.net/wxapp-coms-nav2.png)


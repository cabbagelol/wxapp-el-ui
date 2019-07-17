# Head-导航栏

特性适配移动设备刘海与非刘海屏幕，自动应对不同状态栏高度，基本确保不同移动设备一致表现，并提供相应插槽。

---

![](/assets/head01.png)

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

### 属性

| 名称 | 类型 | 描述 | 版本 |
| :--- | :--- | :--- | :--- |
| head | Object | head参数属于Object对象，内部可规定导航控件样式、是否允许返回、标题内容等等基础设定 | 1.0.1 |
| stickie | Boolean | 悬浮置顶\(单同时出现若干导航控件，会出现遮盖问题\) | 0.0.2 |
| isbar | Boolean | 是否可见顶部bar | 0.0.6 |
| load | Boolean | 显示在标题后的load | 0.0.3 |

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

| 名称 | 类型 | 默认状态 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 0.0.2 |
| style | Object | {} | 含background/textColor | 0.0.2 |
| background | String | "" | 默认状态下将直接继承父容器属性 | 0.0.2 |
| backgroundImage | String | "" | 背景地址，注意在background为inherit下使用 | 0.0.3 |
| textColor | String | "" | 默认状态下将直接继承父容器属性 | 0.0.2 |
| back | Boolean | false | 是否可见返回上一页按钮 | 0.0.2 |
| backlength | Number | 1 | 返回的页面 | 0.0.5 |

### 插槽

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| nav-left | 左侧卡槽 | 0.0.2 |
| nav-title | 中间卡槽 | 0.0.2 |
| nav-right | 右侧卡槽 | 0.0.2 |

使用例子:

```html
 <el-head head='{{head}}'>
    <view slot='nav-tit'>
        <text style='color:red'>自定义</text>标题
    </view>
 </el-head>
```

* 在nav左右卡槽都设置时，title占有空间被占用，标题超出部分将省略号表示

### 依赖

| 插件名称 | 版本 |
| :--- | :--- |
| load | 0.0.2 |

---

### 已知问题

Q: **是否让head提供一个高度参数？**

A: 单纯希望取得head高度，你可以考使用[body](/content-zhu-ti.md)控件，它会在准备好时返回更加详细的高度参数

Q: **同时设置标题和使用标题卡槽会重复么**

A: 使用nav-title卡槽时应当将title设置为""，否则将出现重复的标题。

Q: **导航栏右侧放置的内容会被遮挡么**

A: 在全屏模式下，使用nav-right右侧卡槽会被微信右侧固有按钮遮挡，因此尽量避免这样设计。

Q: **字体颜色**

A: 在1.0.2版本后自带的返回图标支持textColor设置的颜色。


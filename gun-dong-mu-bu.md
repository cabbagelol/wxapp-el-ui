# scrolltxt-滚动幕布

文本滚动容器

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-scrolltxt": "component/_scrolltxt/scrolltxt"
    }
}
```

#### 属性:

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| scrolltxt | Object | {} | 含delay、orientation、velocity | 1.0.1 |
| delay | Number | 3000\(3秒\) | 延迟滚动 | 1.0.1 |
| orientation | String | left | 滚动方向，支持left和right | 1.0.1 |
| velocity | Number | 1 | 20毫秒位移像素点，当越大时移动越快。建议在5以内 | 1.0.1 |
| drag | Boolean | false | 当X轴移动时，是否允许通过手势可左右拖拽查看前后文 | 1.0.1 |
| isscroll | Bookwab | true | 是否滚动 | 1.0.1 |

* 注意，滚动幕布不带然后样式，你可以随意搭配其他空间一起使用，请参考“使用”一栏
* 当属性变动后，需在滚动完成一次滚动后才生效

#### 使用

```html
<el-scrolltxt scrolltxt="{{scrolltxt}}">这里将滚动内容，你可以看到它正在滚动，当然你这里也可以设置为变量</el-scrolltxt>
```

```json
"data": {
  "scrolltxt": {
    "orientation": "left",
    "velocity": .9,
    "delay": 3000 // 3秒
  }
}
```

#### 已知问题

Q: 滚动幕布没有正常运作

A: 滚动幕布的父容器应当存在width准确属性值，不应设置width: 100%或是display:inline-flex


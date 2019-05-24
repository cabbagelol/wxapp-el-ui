# Cell

单元格，可用作展示列表信息，链接或者表单等。

---

![](/assets/cell01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-cell": "component/_cell/cell"
    }
}
```

### 属性

| 名称 | 类型 | 描述 | 版本 |
| :--- | :--- | :--- | :--- |
| title | String | 主标题 | 0.0.2 |
| label | String | 副标题 | 0.0.2 |
| icon | Boolean | 是否允许可见图标，注意它将直接影响slot=“icon”插槽的可见，在使用icon插槽前，应该把它设置为true | 1.0.1 |
| islink | Boolean | 箭头，注意默认箭头是灰色，如果使用深色背景可能无法正常显示箭头 | 0.0.2 |
| elclass | String | - | 0.0.2 - 0.0.6 |

### 样式

##### 1.局部

|  | 说明 | 版本 |
| :--- | :--- | :--- |
| el-title | 标题 | 0.0.6 |
| el-label | 副标题 | 0.0.6 |
| el-cont | 内容 | 0.0.6 |
| el-icon | 图标 | 0.0.6 |
| el-onward | 箭头 | 0.0.6 |

### 插槽

内容卡槽位置，使用如下:

```html
<el-cell title="默认卡槽">
    <view slot="content">内容</view>
</el-cell>
```

图标卡槽位置，使用如下:

```html
<el-cell icon="true" title="默认卡槽" >
    <image slot="icon" src="">内容</image>
</el-cell>

<!-- 必须注意使用icon插槽，需要设置icon为true -->

<el-cell icon="true" title="自定义" >
    <el-img slot="icon" src=""></el-img>
</el-cell>
```




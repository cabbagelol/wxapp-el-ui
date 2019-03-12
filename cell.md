# Cell

要显示列表，链接或表单的单元格。

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-cell": "component/_cell/cell"
    }
}
```

#### 属性:

| 名称 | 类型 | 描述 |
| :--- | :---: | :--- |
| title | String | 主标题 |
| label | String | 副标题 |
| icon | Boolean | 是否允许可见图标，注意它将直接影响slot=“icon”插槽的可见，在使用icon插槽前，应该把它设置为true |
| islink | Boolean | 箭头，注意默认箭头是灰色，如果使用深色背景可能无法正常显示箭头 |

#### 插槽:

内容卡槽位置，使用如下:

```html
    <el-cell title="默认卡槽">
        <view slot="content">内容</view>
    </el-cell>
```

图标卡槽位置，使用如下:

```html
    <el-cell icon="true" title="默认卡槽">
        <view slot="icon">内容</view>
    </el-cell>
    
    <!-- 必须注意使用icon插槽，需要设置icon为true -->
```




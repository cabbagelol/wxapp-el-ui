# button-按钮

按钮

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-button": "component/_button/button"
    }
}
```

#### 属性

| 名称 | 类型 | 默认 | 说明 |
| :--- | :--- | :--- | :--- |
| style | String | "" | 自定义样式，这里会直接传给内部的button。并非el-button标签 |
| disabled | Boolean | false | 按钮禁用 |
| radius | Boolean | false | 按钮圆角 |
| size | String | "" | 大小 |

* 全局样式可以影响button控件样式

#### 使用

```html
<!-- 标准按钮 -->
<el-button>按钮</el-button>

<el-button>
    <view style='color:red'>按钮</view>
    <el-load size='.8'></el-load>
</el-button>
```




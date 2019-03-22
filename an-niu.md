# button-按钮

按钮

---

![](/assets/button01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-button": "component/_button/button"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| style | String | "" | 自定义样式，这里会直接传给内部的button。并非el-button标签 | 1.0.1 |
| disabled | Boolean | false | 按钮禁用 | 1.0.1 |
| radius | Boolean | false | 按钮圆角 | 1.0.1 |
| size | String | "" | 大小.含mini、normal、large，当然也可以写成3、5、7. | 1.0.1 |

* 注意button控件按钮无法正常使用open-type="getUserInfo"类型功能，你应该使用原生来代替
* 全局样式可以影响button控件样式

### 样式

##### 1. 全局

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| .\_\_button__ | 主体 | 1.0.1 |
| .\_\_button_mini___ | 类型为小 | 1.0.1 |
| .\_\_button_normal___ | 类型为标准 | 1.0.1 |
| .\_\_button_large___ | 类型为大 | 1.0.1 |

##### 2. 局部

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-button | 按钮主体 | 1.0.1 |

使用方式请参考这里[重写Class类](/zhong-xie-class-lei.md)。

### 使用

```html
<!-- 标准按钮 -->
<el-button>按钮</el-button>

<el-button>
    <view style='color:red'>按钮</view>
    <el-load size='.8'></el-load>
</el-button>
```




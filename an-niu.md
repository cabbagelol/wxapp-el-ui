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
| style | String | "" | 自定义样式，这里会直接传给内部的button。并非el-button标签 | 0.0.2 |
| disabled | Boolean | false | 按钮禁用 | 0.0.2 |
| radius | Boolean | false | 按钮圆角 | 0.0.2 |
| size | String | "" | 大小.含mini、normal、large，当然也可以写成3、5、7. | 0.0.2 |
| vibrate | Boolean | true | 触摸振动 | 0.0.4 |
| type | String | "" | 按钮类型 | 0.0.6 |

* 注意button控件按钮无法正常使用open-type="getUserInfo"类型功能，你应该使用原生来代替
* 全局样式可以影响button控件样式

##### type的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| success | 成功 | 0.0.6 |
| warning | 警告 | 0.0.6 |
| danger | 严重 | 0.0.6 |
| default | 默认 | 0.0.6 |

### 事件

`bindtag`: function \(e\) {} 触摸事件\(该事件可能在未来被移除\)

```
和bindtap相同效果，但e返回的是内部button,实际上直接在el-button绑定bindtap事件无妨。
```

### 样式

##### 1. 全局

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| .\_\_button\_\_ | 主体 | 0.0.2 |
| .\_\_button_mini_\_\_ | 类型为小 | 0.0.2 |
| .\_\_button_normal_\_\_ | 类型为标准 | 0.0.2 |
| .\_\_button_large_\_\_ | 类型为大 | 0.0.2 |

##### 2. 局部

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-button | 按钮主体 | 0.0.2 |

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




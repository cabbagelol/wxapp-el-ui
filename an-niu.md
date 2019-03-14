# button-按钮

按钮

---

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

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| style | String | "" | 自定义样式，这里会直接传给内部的button。并非el-button标签 | 1.0.1 |
| disabled | Boolean | false | 按钮禁用 | 1.0.1 |
| radius | Boolean | false | 按钮圆角 | 1.0.1 |
| size | String | "" | 大小.含mini、normal、large，当然也可以写成3、5、7. | 1.0.1 |

* 注意button控件按钮无法正常使用open-type="getUserInfo"类型功能，你应该使用原生来代替
* 全局样式可以影响button控件样式

```css
/*app.wxss*/
/*app中这样写将会影响el-button，为了方便管理全部button，当然它也有内部样式类*/

button {
  background: red;
}


button:hover,
button:active {
  background: red;
  color: #FFF
}

/*局部*/
._button_ {
  background: #000;
}
```

#### 重写size类

```css
/*
* 放到page.wxss或app.wxss中
* 如果size类型增加，请参考属性表中新增类型
*/

._button_mini {
  /*do*/
}

._button_normal {
  /*do*/
}

._button_large {
  /*do*/
}
```

#### 使用

```html
<!-- 标准按钮 -->
<el-button>按钮</el-button>

<el-button>
    <view style='color:red'>按钮</view>
    <el-load size='.8'></el-load>
</el-button>
```




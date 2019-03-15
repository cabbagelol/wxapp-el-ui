# numIndicator-数字指示器

数字控制器,支持长按快速叠加

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-numIndicator": "component/_numIndicator/numIndicator"
    }
}
```

### 属性

### 方法

`bindchange`: function \(e\) 当数字变动时，无论是主动还是被动

@e.detail:

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| el | Object | 内部输入框对象 | 1.0.1 |
| index | Number | 序列\(一般无用\) | 1.0.1 |
| value | Number | 数字变动返回的值 | 1.0.1 |

### 样式

##### 1. 方法一

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| **numIndicator** | 指示器根类 |  |
| **numIndicator\_btnleft** | 指示器左侧按钮 | 1.0.1 |
| **numIndicator\_btnright** | 指示器右侧按钮 | 1.0.1 |
| **numIndicator\_value** | 指示器input输入框 | 1.0.1 |

##### 2. 方法二

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-button-left | 左侧按钮 | 1.0.1 |
| el-button-right | 右侧按钮 | 1.0.1 |
| el-input | 输入框 | 1.0.1 |

使用方式你可以参考这里[重写Class类](/zhong-xie-class-lei.md)。

### 使用

```html
<el-numIndicator value='0' min='0' longtag></el-numIndicator>
```

* 注意如果不设置min，那么它将允许负数
* 数字指示器未设置value属性时为0




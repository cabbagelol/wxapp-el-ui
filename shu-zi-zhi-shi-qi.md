# numIndicator-数字指示器

数字控制器,支持长按快速叠加

---

![](/assets/number01.png)

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

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Number | 0 | 值 | 0.0.2 |
| min | Number | - | 最小值 | 0.0.2 |
| max | Number | - | 最大值 | 0.0.2 |
| superposition | Number | 1 | 单次叠加值 | 0.0.2 |
| longtag | Boolean | false | 长按叠加 | 0.0.2 |
| disabled | Boolean | false | 禁用 | 0.0.5 |
| copy | Boolean | true | 长按复制 | 0.0.5 |

### 方法

`bindchange`: function \(e\) 当数字变动时，无论是主动还是被动 \| 0.0.2

@e.detail:

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| el | Object | 内部输入框对象 | 0.0.2 |
| index | Number | 序列\(一般无用\) | 0.0.2 |
| value | Number | 数字变动返回的值 | 0.0.2 |

`bindholdtap`: function \(e\) 当触摸一直保持 \| 0.0.2

@e.detail:

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| el | Object | 内部输入框对象 | 0.0.2 |
| value | Number | 值 | 0.0.2 |

`bindtapend`: function \(e\) 触摸离开 \| 0.0.2

@e.detail:

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| el | Object | 内部输入框对象 | 0.0.2 |
| value | Number | 值 | 0.0.2 |

`bindcody`: function \(\) 复制事件 \| 0.0.5

### 插槽

| 名称 | 说明 | 版本 |
| :--- | :--- | ---: |
| left | 左侧按钮插槽 | 0.0.3 |
| right | 右侧按钮插槽 | 0.0.3 |

### 样式

##### 全局

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| .\_\_numIndicator\_\_ | 全局指示器根类 | 0.0.2 |
| .\_\_numIndicator\_btnleft\_\_ | 全局指示器左侧按钮 | 0.0.2 |
| .\_\_numIndicator\_btnright\_\_ | 全局指示器右侧按钮 | 0.0.2 |
| .\_\_numIndicator\_value\_\_ | 全局指示器input输入框 | 0.0.2 |

##### 局部

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-button-left | 左侧按钮 | 0.0.2 |
| el-button-right | 右侧按钮 | 0.0.2 |
| el-button-disabled | 按钮禁用状态 | 0.0.5 |
| el-input | 输入框 | 0.0.2 |

使用方式请参考这里[重写Class类](/zhong-xie-class-lei.md)。

### 使用

```html
<el-numIndicator value='0' min='0' longtag></el-numIndicator>
```

* 注意如果不设置min，那么它将允许负数
* 数字指示器未设置value属性时为0

---

### 已知问题

Q: **自定义插槽和默认的加减冲突**

A: 卡槽在0.0.3添加，但未解决自定义插槽和默认加减按钮冲突问题，0.0.4以上已修复该问题


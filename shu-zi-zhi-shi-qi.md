# numIndicator-数字指示器

数字控制器,支持长按快速叠加

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-numIndicator": "component/_numIndicator/numIndicator"
    }
}
```

#### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Number | 0 | 值 | 1.0.1 |
| min | Number | - | 最小值 | 1.0.1 |
| max | Number | - | 最大值 | 1.0.1 |
| superposition | Number | 1 | 一次叠加值 | 1.0.1 |
| longtag | Boolean | false | 是否允许加速 | 1.0.1 |



#### 使用

```html
<el-numIndicator value='0' min='0' longtag></el-numIndicator>
```

* 注意如果不设置min，那么它将允许负数
* 数字指示器未设置value属性时为0




# textarea-多行输入框

文本框-多行

---

| ![](/assets/textarea01.png) |
| :---: |


## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-textarea": "component/_textarea/textarea"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 1.0.1 |
| placeholder | String | "" | placeholder | 1.0.1 |
| elstyle | String | "" | 继承style | 1.0.1 - 1.0.1 |
| elclass | String | "" | 继承class | 1.0.1 - 1.0.1 |
| value\(~~data~~\) | String | "" | 内容 | 1.0.1 |
| wordcount | Number | 0 |  |  |

### 使用

```html
<el-textarea title='名称'></el-textarea>
```




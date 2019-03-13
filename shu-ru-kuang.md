# input-输入框

输入控件，它由input+cell基本组成使用指南

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-input": "component/_input/input"，
      "el-input-title": "component/_input/input-title"
    }
}
```

#### el-input属性

| 名称 | 类型 | 默认 | 说明 |
| :--- | :--- | :--- | :--- |
| title | String | "" | 输入框头部标题 |
| type | String | text | 输入类型 |
| mustchoose | Boolean | false | 是否出现必选符 |
| placeholder | String | "" | 预选 |
| value | String | "" | 值 |

#### el-input-title属性

| 名称 | 类型 | 默认 | 说明 |
| :--- | :--- | :--- | :--- |
| omit | Boolean | false | 省略 |



#### 使用

```html
<el-input title='名称'></el-input>

<el-input>
    <el-input-title omit='true'>
    </el-input-itile>
</el-input>
```




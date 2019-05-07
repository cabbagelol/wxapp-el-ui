# focus-焦点

焦点与校验

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-focus": "component/_focus/focus"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| verification | String | "" | 验证类型 | 0.0.5 |
| verifications | Object | {} | 自定义校验 |  |
| type | String | "" | 聚焦颜色类型 | 0.0.5 |
| show | Boolan | false | 是否主动出现焦点,颜色处决于[type](#type的合法值) | 0.0.5 |

##### verification的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| 900 | 包含空符号 | 0.0.5 |
| 901 | 内容为空 | 0.0.5 |
| 1000 | 区配中文 | 0.0.5 |
| 1001 | 区配小写英文 | 0.0.5 |
| 1002 | 区配大写英文 | 0.0.5 |
| 1003 | 区配数字 | 0.0.5 |
| 2001 | 区配邮箱 | 0.0.5 |

##### type的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| danger | 严重 | 0.0.5 |
| warning | 警告 | 0.0.5 |

##### verifications的属性:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| title | 提示标题 | 0.0.5 |

verifications的具体使用参考下方

* 自定义规则接受一个对象，包括v和msg，v则是校验方法，msg是符合时提示内容。
* 自定义规则名称并非使用数字，你可以写为'text-err'等。

### 使用

```html
<el-focus show='{{true}}'>
    <!-- do -->
</el-focus>

<el-focus verification='{{verification}}' verifications='{{verifications}}'>
    <el-input name='userName' value='小明 w2' />
</el-focus>
```

```js
Page({
    data: {
      verification: '1001,1002,0', // 区配存在类型
      verifications: {
        title: '不通过验证，存在以下问题:',
        0: {
          v: (value) => { return '您好'.indexOf(value) >= 0},
          msg: '不允许包含"您好"'
        }
      }
    }
})
```

---

### 依赖

| 名称 | 关系 | 版本 |
| :--- | :--- | :--- |
| input | 非依赖，相关 | 0.0.5 |
| textarea | 非依赖，相关 | 0.0.5 |
| form | 非依赖，相关 | 0.0.5 |
| address | 非依赖，相关 | 0.0.5 |




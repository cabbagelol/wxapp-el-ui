# focus-焦点

焦点与验证

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
| type | String | "" | 聚焦颜色类型 | 0.0.5 |
| show | Boolan | false | 是否主动出现焦点,颜色处决于[type](#type的合法值) | 0.0.5 |

##### verification的合法值:

|  | 说明 | 版本 |
| :--- | :--- | :--- |
| 1001 | 区配中文 | 0.0.5 |
| 1002 | 区配英文 | 0.0.5 |
| 1001 | 区配数字 | 0.0.5 |
| 2002 | 区配邮箱 | 0.0.5 |
|  |  |  |

##### type的合法值:

|  | 说明 | 版本 |
| :--- | :--- | :--- |
| danger | 严重 | 0.0.5 |
| warning | 警告 | 0.0.5 |

### 使用

```html
<el-focus show='{{true}}'>
    <!-- do -->
</el-focus>

<el-focus verification='1001,1002'>
    <el-input name='userName' value='小明2' />
</el-focus>
```

---

### 依赖

| 名称 | 关系 | 版本 |
| :--- | :--- | :--- |
| input | 非依赖，相关 | 0.0.5 |
| textarea | 非依赖，相关 | 0.0.5 |
| form | 非依赖，相关 | 0.0.5 |
| address | 非依赖，相关 | 0.0.5 |




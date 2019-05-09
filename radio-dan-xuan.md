# radio-单选

单选控件

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-radio": "component/_radio/radio",
      "el-radio-group": "component/_radio-group/radio-group"
    }
}
```

## &lt;el-radio-group&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String | "" | 单选组名称，如果希望被form所获取，应作为必选项填写，同id一样唯一性 | 0.0.5 |
| value | String | "" | 单选初始值 | 0.0.5 |

### 事件

`bindchange`: function \(e\) {} 选项变更时

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| type | String | radio-group | 0.0.5 |
| value | String | 值 | 0.0.5 |
| data | Array | 单选数组 | 0.0.5 |

### 使用

```html
<el-radio-group name='radio' bindchange='onRadioGroup'>
  <el-radio value='2-{{index}}' wx:for='{{3}}' wx:key='{{index}}'>单选内容-radio2-{{index}}</el-radio>
</el-radio-group>
```

```js
Page({
    onRadioGroup (e) {
        consloe.log(e)
    }
})
```

## &lt;el-radio&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String | "" | 单选控件名称 | 0.0.5 |
| value\(必选\) | String | "" | 单选值，与id同理 | 0.0.5 |
| checked | Boolean | false | 单选初始选中状态 | 0.0.5 |
| isradio | Boolean | false | 是否可见默认的选择框 | 0.0.5 |
| disabled | Boolean | false | 禁用 | 0.0.5 |

### 使用

```html
<el-radio checked='{{true}}'/>
```

---

### 已知问题

Q: **单选在form重置下不会执行重置**

A: 会在之后版本新增修补，因此0.0.5版本radio不受form下的reset重置.

Q: **在from下多层嵌套的radio-group无法被获取 **

A: 可通过bindchange事件取得

### 依赖

| 名称 | 关系 | 版本 |
| :--- | :--- | :--- |
| form | 非依赖，相关 | 0.0.5 |




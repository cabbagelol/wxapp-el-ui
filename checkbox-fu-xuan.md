# checkbox-复选

复选框

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-checkbox": "component/_checkbox/checkbox",
      "el-checkbox-group": "component/_checkbox-group/checkbox-group"
    }
}
```

## &lt;checkbox-group&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String | "" | 复选组名称，如果希望被form所获取，应作为必选项填写，同id一样唯一性 | 0.0.5 |
| value | String | "" | 复选初始值 | 0.0.5 |

### 事件

`bindchange`: function \(e\) {} 选项变更时

| 名称 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| type | String | checkbox-group | 0.0.5 |
| value | String | 值 | 0.0.5 |
| data | Array | 复选数组 | 0.0.5 |

### 使用

```html
<el-checkbox-group name='radio' bindchange='onCheckboxGroup'>
  <el-checkbox value='2-{{index}}' wx:for='{{3}}' wx:key='{{index}}'>复选内容-radio2-{{index}}</el-checkbox>
</el-checkbox-group>
```

```js
Page({
    onCheckboxGroup (e) {
        consloe.log(e)
    }
})
```

## &lt;checkbox&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String | "" | 复选控件名称 | 0.0.5 |
| value\(必选\) | String | "" | 复选值，与id同理 | 0.0.5 |
| checked | Boolean | false | 复选初始选中状态 | 0.0.5 |
| ischeckbox | Boolean | false | 是否可见默认的选择框 | 0.0.5 |
| disabled | Boolean | false | 禁用 | 0.0.5 |

### 使用

```html
<el-checkbox checked='{{true}}'/>
```

---

### 已知问题

Q: **单选在form重置下不会执行重置**

A: 会在之后版本新增修补，因此0.0.5版本checkbox不受form下的reset重置.

Q: **在from下多层嵌套的checkbox-group无法被获取 **

A: 可通过bindchange事件取得

### 依赖

| 名称 | 关系 | 版本 |
| :--- | :--- | :--- |
| form | 非依赖，相关 | 0.0.5 |




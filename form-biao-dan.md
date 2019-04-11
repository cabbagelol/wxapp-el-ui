# form-表单

获取表单控件值，联动`<el-input>` `<el-textarea>` `<el-address>`控件

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-form": "component/_form/form"
    }
}
```

### 属性

#### &lt;el-button&gt;

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| type | String | "" | 表达提交和擦除按钮控件，对应为submit、reset | 0.0.4 |

### 事件

以下事件都由用户主动触摸el-button控件触发。

`bindsubmit`: function \(e\) {} 提交

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Object | {} | 表单结果集合 | 0.0.4 |

`bindreset`: function \(e\) {} 擦除

### 使用

```html
<el-form>
    <!-- 详细的表达控件请看控件说明 -->
    <el-input />
    <el-textarea />
    <el-address />

    <el-button type='submit'>提交</el-button>
    <el-button type='reset'>重置</el-button>
</el-form>
```

参考[&lt;el-input&gt;](/shu-ru-kuang.md)、[&lt;el-textarea&gt;](/duo-xing-shu-ru-kuang.md) 、[&lt;el-address&gt;](/address-di-zhi.md).

### 依赖

| 名称 | 版本 |
| :--- | :--- |
| input | 0.0.4 |
| textarea | 0.0.4 |
| address | 0.0.4 |
| button | 0.0.4 |




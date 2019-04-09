# form-表单

表单容器，支持`<el-input>` `<el-textarea>`

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

### 事件

bindsubmit: function \(e\) {} 表单事件，被&lt;el-button type='submit'&gt;触发

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Object | {} | 表单内空间值 | 0.0.4 |

bindreset: function \(\) {} 重置事件，被&lt;el-button type='reset'&gt;触发

### 使用

```html
<el-form>
    <el-* />

    <el-button type='submit'>提交</el-button>
    <el-button type='reset'>重置</el-button>
<el-form>
```




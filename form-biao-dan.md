# form-表单

获取表单控件值，联动`<el-input>` `<el-textarea>` `<el-address> <el-radio>`控件

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
| type | String | "" | 表达提交和重置按钮 | 0.0.4 |

##### type的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| submit | 提交 | 0.0.4 |
| reset | 重置 | 0.0.4 |

### 事件

以下事件都由用户主动触摸el-button控件触发。

`bindsubmit`: function \(e\) {} 提交

@e.detail

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Object | {} | 表单结果集合 | 0.0.4 |

`bindreset`: function \(e\) {} 重置

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

---

### 已知问题

Q: **无法获取所支持表单值**

A: 1. 当使用cell等这类控件包裹时、form无法获取。

```html
<el-from name='from'>
 <!-- 这种情况无法获取 -->
 <el-cell>
  <el-input name='sex' />
 </el-cell>

 <!-- 改成这样既可 -->
 <view>
  <el-input name='age' />
 </view>
</el-form>
```

A: 2. 通常未设置name属性，在form所有支持的表单控件获取前提是设置name，比如下方代码，

```html
<el-form name='from'>
    <!-- 下方input可被from铺抓 -->
    <el-input id='one' value='{{value1}}' name='sex' />
    <!-- 下方input无法被from铺抓 -->
    <el-input id='two' value='{{value2}}' />
</el-form>
```




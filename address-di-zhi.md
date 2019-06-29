# address-地址选择器

地址

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-address": "component/_address/address"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | String | "" | 默认的值 | 0.0.4 |
| name | String | "" | 关联form | 0.0.4 |
| placeholder | String | "" |  | 0.0.4 |

### 事件

`bindtapchange`: function \(e\) {} 当用户按下"确认"触发

@e.detail

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | String | "" | 值 | 0.0.4 |
| ~~citysIndex~~ | ~~Array~~ | ~~\[\]~~ | ~~内部选择器的index~~ | 0.0.4 - 0.0.4 |
| province | String | "" | 省 | 0.0.4 |
| city | String | "" | 市 | 0.0.4 |
| area | String | "" | 区 | 0.0.4 |
| postcode | String | "" | 省区号 | 0.0.5 |
| code | Array | \[\] | 邮编 | 0.0.5 |

`bindcancel`: funciton \(e\) {} 取消选择

`bindchange`~~: function \(e\) {} 当滑动时触发~~

~~@e.detail~~

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| citysIndex | Array | \[\] | 内部选择器的index | 0.0.4 - 0.0.4 |
| value | String | "" | 值 | 0.0.4 - 0.0.4 |

### 样式

##### 1.局部

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-cont | - | 0.0.6 |

### 使用

```html
<el-address bindtapchange='' bindchange='' placeholder='请选择地区'>
    <!-- 将需要选择器触发的标签放置这里 -->
</el-address>
```




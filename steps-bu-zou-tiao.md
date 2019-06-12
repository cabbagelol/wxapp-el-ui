# steps-步骤条

焦点与校验

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-step": "component/_steps/step",
      "el-steps": "component/_steps/steps"
    }
}
```

### &lt;el-steps&gt;

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| direction | String | "" | 方向 | 0.0.6 |
| status | String | "" | 进度 | 0.0.6 |
| circulation | Boolean | false | 循环 | 0.0.6 |

##### direction的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| vertical | 垂直 | 0.0.6 |
| horizontal | 水平 | 0.0.6 |

### 使用

```html
<el-steps direction='{{direction}}' status='{{status}}' circulation='circulation'>
    <el-step />
</el-steps>

<el-button type='primary' catchtap='onNext'>下一步</el-button>
<el-button type='primary' catchtap='onPrevious'>上一步</el-button>
<el-button catchtap='onReset'>重置</el-button>
```

```js
Page({
    data: {
        "direction": 'vertical',
        "status": 1,
        "circulation": false
    },
    
    onNext () {
      this.steps.on('next', e => {
        // do
      });
    },
  
    onPrevious () {
      this.steps.on('previous');
    },
  
    onReset () {
      this.steps.on('reset');
    },
})
```

### &lt;el-step&gt;






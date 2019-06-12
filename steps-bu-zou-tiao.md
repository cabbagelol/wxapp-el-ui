# steps-步骤条

步骤条

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

### 事件

`on`: funciton\(event, callback\) {} steps操作,需配合selectComponent使用 \| 0.0.6

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| callback.code | 结果代码 | 0.0.6 |
| callback.index | 当前位置序列 | 0.0.6 |
| callback.msg | 说明 | 0.0.6 |

##### callback.code的描述：

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| 10 | 下一步，当前序列在第一位时 | 0.0.6 |
| 15 | 下一步，当前序列最后时 | 0.0.6 |
| 20 | 上一步，序列第一 | 0.0.6 |
| 25 | 上一步，序列最后 | 0.0.6 |

### 使用

```html
<el-steps direction='{{direction}}' status='{{status}}' circulation='circulation' class='steps'>
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
    
    onLoad() {
      this.selectComponent(".steps")
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

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| subhead | String | "" | 副标题 | 0.0.6 |
| title | String | "" | 标题 | 0.0.6 |
| type | Boolean | false | 类型 | 0.0.6 |

##### direction的合法值:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| vertical | 垂直 | 0.0.6 |
| horizontal | 水平 | 0.0.6 |

### 事件

`bindonetap`: function \(e\) {} tap同理，当点击单个触发 \| 0.0.6

### 使用

```html
<el-steps>
    <el-step title='内容 {{index}}' subhead='副标题内容' wx:for='{{10}}' wx:key='{{index}}' bindonetap='onStepTap' />
</el-steps>
```

```js
Page({
    onStepTap (e) {
        // do
    }
})
```




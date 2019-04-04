# vacancy-空置区

空间占用容器

---

![](/assets/vacancy01.png)

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-vacancy": "component/_vacancy/vacancy"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| cont | Boolean | false | 空置内容区域 | 0.0.2 |
| height | String | "" | 高度 | 0.0.2 |

### 插槽

| 名称 | 说明 | 版本 |
| :--- | :--- | ---: |
| cont | 自定义内容卡槽 | 0.0.2 |

### 使用

```html
<el-vacancy />

<!-- 自定义插槽 -->
<el-vacancy>
  <view slot='cont'>
    <el-img src='https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg' style='margin: 0 auto;display:block;width: 300rpx; height: 300rpx' />
    <text style='color: red'>标签</text>自定义内容,高度为600rpx
  </view>
</el-vacancy>
```




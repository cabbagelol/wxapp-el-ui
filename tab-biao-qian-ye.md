# tab-标签页

标签页

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-tab": "component/_tab/tab",
      "el-tab-content": "component/_tab/tab-item"
    }
}
```

### el-tab属性\(父\)

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| active | String | "" | 当前显示标签页内容 | 1.0.1 |
| animation | Boolean | false | 动画 | 1.0.1 |

### el-tab-content属性\(子\)

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 1.0.1 |
| disabled | Boolean | false | 禁用标签 | 1.0.1 |
|  |  |  |  |  |

### 使用

```html
<el-tab active='{{tab.title}}' bindchange='onTabChange'>
  <el-tab-content title='设计'>
    <view class='tab-content'>
      设计理念
      <el-load size='1' />
    </view>
  </el-tab-content>
  <el-tab-content title='工业' disabled>
    <view class='tab-content'>
      工业科技
      <el-load size='1' />
    </view>
  </el-tab-content>
  <el-tab-content title='人才'>
    <view class='tab-content'>
      人员管理
      <el-load size='1' />
    </view>
  </el-tab-content>
  <el-tab-content title='开发{{index}}'>
    <view class='tab-content'>
      资源管理
      <el-load size='1' />
    </view>
  </el-tab-content>
  <el-tab-content title='记忆'>
    <view class='tab-content'>
      大脑
      <el-load size='1' />
    </view>
  </el-tab-content>
</el-tab>
```




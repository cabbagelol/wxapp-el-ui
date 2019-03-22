# tab-标签页

标签页

---

![](/assets/tab01.png)

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
| isscroll | Bookean | true | 是否允许滚动 | 1.0.1 |

### el-tab-content属性\(子\)

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 1.0.1 |
| disabled | Boolean | false | 禁用标签 | 1.0.1 |

### 插槽

Tab标签左侧与右侧区域:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| left | 左侧插槽 | 1.0.1 |
| right | 右侧插槽 | 1.0.1 |

```html
<el-tab class='tab' animation='{{tab.animation}}' scroll='{{tab.scroll}}' active='{{tab.title}}' bindchange='onTabChange'>

  <!-- 左侧区域 -->
  <view slot='left'>
    左侧
  </view>

  <el-tab-content title='{{item.title}}' wx:for='{{tab.data}}' wx:key='{{index}}' disabled='{{item.disabled}}'>
    <block wx:if='{{tab.content}}'>
      <view class='tab-content'>
        <el-cell title='{{item.title}}-{{i}}' label='{{item.cont}}' wx:for='{{10}}' wx:for-item='i' wx:key='{{i}}' islink></el-cell>
      </view>
    </block>
  </el-tab-content>

  <!-- 右侧区域 -->
  <view slot='right'>
    右侧
  </view>

</el-tab>
```

### 样式

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| el-nav | tab标签根 | 1.0.1 |
| el-nav-item | tab标签单独标签 | 1.0.1 |
| el-content | 内容 | 1.0.1 |

使用方式请参考这里[重写Class类](/zhong-xie-class-lei.md)。

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

  <el-tab-content title='人才'></el-tab-content>

</el-tab>
```

```js
  onTabChange (e) {
    this.setData({
      'tab.index': e.detail.index,
      'tab.title': e.detail.title
    })
  }
```

具体参考模板[代码](https://github.com/cabbagelol/wxapp-el-ui/tree/master/component/_tab)


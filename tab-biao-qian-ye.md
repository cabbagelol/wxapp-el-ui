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
| active | String | "" | 当前显示标签页内容 | 0.0.2 |
| animation | Boolean | false | 动画 | 0.0.2 |
| isscroll | Bookean | true | 是否允许滚动 | 0.0.2 |

### el-tab-content属性\(子\)

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 0.0.2 |
| disabled | Boolean | false | 禁用标签 | 0.0.2 |

### 插槽

Tab标签左侧与右侧区域:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| left | 左侧插槽 | 0.0.2 |
| right | 右侧插槽 | 0.0.2 |
| title-\* | 自定义标题插槽，一旦使用该插槽，默认标题将自动隐藏，因此需要开发者手动重新设置 | 0.0.3 |

```html
<!-- 使用方法 -->
<el-tab class='tab' animation='{{tab.animation}}' scroll='{{tab.scroll}}' active='{{tab.title}}' bindchange='onTabChange'>

  <!-- 左侧自定义区域 -->
  <view slot='left'></view>

  <el-tab-content title='{{item.title}}' wx:for='{{tab.data}}' wx:key='{{index}}' disabled='{{item.disabled}}'>
    <block wx:if='{{tab.content}}'>
      <view class='tab-content'>
        <el-cell title='{{item.title}}-{{i}}' label='{{item.cont}}' wx:for='{{10}}' wx:for-item='i' wx:key='{{i}}' islink></el-cell>
      </view>
    </block>
  </el-tab-content>

  <!-- 右侧自定义区域 -->
  <view slot='right'></view>

</el-tab>



<!-- 自定义标题使用方法 -->
<el-tab>
  <view slot='title-{{item.title}}' wx:for='{{tab.data}}' wx:key='{{index}}'>
    <!-- 自定义标题 -->
  </view>
</el-tab>
```

```js
Page({
    data: {
        tab: {
            custom: false,
            scroll: true,
            animation: true,
            content: true,
            title: '人才',
            data: [
            {
              title: '领袖',
              cont: '国家导航',
              disabled: true
            },
            {
              title: '设计',
              cont: '人物互交'
            },
            {
              title: '人才',
              cont: '公司高层'
            },
            {
              title: '科技技能',
              cont: '城市推动力'
            },
            {
              title: '水源',
              cont: '人类来源',
            },
            {
              title: '动物',
              cont: '生物链',
            },
            {
              title: '代码',
              cont: '码农构建'
            },
          ]
        }
    }
})
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


# body-主体

通用的主体布局,为页面提高三块区域

---

| ![](/assets/body01.png) |
| :---: |

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-vacancy": "component/_vacancy/vacancy"
    }
}
```

body控件会对head和footer识别，计算出中间区域的适配高度。

### 插槽

导航栏插槽:

```html
<el-body>
    <view slot='head'>
        <!-- do -->
    </view>
</el-body>
```

主体内容插槽:

```html
<el-body>
    <view slot='body'>
        <!-- do -->
    </view>
</el-body>
```

页脚插槽:

```html
<el-body>
    <view slot='footer'>
        <!-- do -->
    </view>
</el-body>
```

### 使用

```html
<el-body>
  
  <el-head slot='head' head='{{head}}' stickie='true'></el-head>
  
  <view slot='body'>
    <view wx:for='{{100}}' >{{index}}</view>
  </view>
  
  <el-head slot='head' head='{{head}}' ></el-head>
  
</el-body>
```




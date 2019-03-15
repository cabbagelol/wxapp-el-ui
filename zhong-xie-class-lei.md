# 重写

应对不同风格，实际上wxapp-el-ui考虑了一些组件控件或是界面控件允许重写Class，来控制控件样式。

这里我们将以数字指示器来演示如何重写Class类，首选我们找到数字指示器中"样式"一栏，数字指示器控件中提供了仅有几个Class名称，我们来看看：

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| **numIndicator** | 指示器根类 | 1.0.1 |
| **numIndicator\_btnleft** | 指示器左侧按钮 | 1.0.1 |
| **numIndicator\_btnright** | 指示器右侧按钮 | 1.0.1 |
| **numIndicator\_value** | 指示器input输入框 | 1.0.1 |

* 所有wxapp-el-ui控件命名都以"**class**"来

为了方便管理独立的控件样式，我们应该在项目的根目录下创建public/styles文件夹作为公共样式库,这里我们以numIndicator.wxss来命名它。

  
numIndicator.wxml:

```html
<el-numIndicator slot='content' class='numIndicator-custom'></el-numIndicator>
```

numIndicator.wxss:

```css
/*当然为了区分,我们添加numIndicator-custom识别，引用该类指示器会使用我们自定义样式*/

.numIndicator-custom .__numIndicator__ {
  border: 1px solid #f2f2f2;
  border-radius: 0.3rem;
}

.numIndicator-custom .__numIndicator_btn__ {
  padding: 0 20rpx;
}

.numIndicator-custom .__numIndicator_value__ {
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 0rem !important;
  background: #fff !important;
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
}

.numIndicator-custom .__numIndicator_value__ > input {
  font-size: 23rpx;
  color: #999; 
}
```

### 

### 单独的Class

除了以上方法外，wxapp-el-ui也提供另一种重写方式，比如这样:

```html
<el-numIndicator slot='content' el-button-left='numIndicator-button-left'></el-numIndicator>
```

```css
.numIndicator-button-left {
  color: red;
}
```




# 重写

应对不同风格，实际上wxapp-el-ui考虑了一些组件控件或是界面控件允许重写Class，来控制控件样式。

这里我们将以"数字指示器"来演示如何重写它的Class类流程，再此之前我们首选需要知道"数字指示器"是否支持重新(当你看到"样式"一栏，表示着它提供了特定Class通道)，"指示器"中提供了两种方式，分别为全局与局部。

### 1.全局

通常提供全局的Class会以".class"表示,如下表格：

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| .numIndicator | 全局指示器根类 | 1.0.1 |
| .numIndicator\_btnleft | 全局指示器左侧按钮 | 1.0.1 |
| .numIndicator\_btnright | 全局指示器右侧按钮 | 1.0.1 |
| .numIndicator\_value | 全局指示器input输入框 | 1.0.1 |

* 所有wxapp-el-ui控件命名都以"\_\_class\_\_"来

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

请别忘记将public/styles/numIndicator.wxss导入到对应的page.wxss中。

### 2.单独的Class

除了以上方法外，wxapp-el-ui也提供另一种重写方式，比如这样:

```html
<el-numIndicator slot='content' el-button-left='numIndicator-button-left'></el-numIndicator>
```

```css
.numIndicator-button-left {
  color: red;
}
```

实际上将"numIndicator-button-left"类赋予el-button-left，被内部解析到对应位置，因此通过这样方法控制内部视图样式。


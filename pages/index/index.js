const app = getApp();

Page({
  data: {
    value: "",
    head: {
      title: '首页',
      style: {
        textColor: '#FFF',
        background: '#18b6c1'
      }
    },
    searchvalue: '',
    module: [{
      title: '组件',
      data: [{
          url: '../nav/nav',
          title: '导航',
          label: 'head'
        },
        {
          url: '../img/img',
          title: '图片',
          label: 'img'
        },
        {
          url: '../cell/cell',
          title: '单元格',
          label: 'cell'
        },
        {
          url: '../scrolltxt/scrolltxt',
          title: '滚动幕布',
          label: 'scrolltxt'
        },
        {
          url: '../input/input',
          title: '输入框',
          label: 'input'
        },
        {
          url: '../textarea/textarea',
          title: '多行输入框',
          label: 'textarea'
        },
        {
          url: '../numIndicator/numIndicator',
          title: '数字指示器',
          label: 'numIndicator'
        },
        {
          url: '../popup/popup',
          title: '弹出框',
          label: 'popup'
        },
        {
          url: '../refresh/refresh',
          title: '下拉刷新',
          label: 'refresh'
        },
        {
          url: '../tab/tab',
          title: '标签页',
          label: 'tab'
        },
        {
          url: '../rolling/rolling',
          title: '滚动',
          label: 'rolling'
        },
        {
          url: '../file/file',
          title: '文件',
          label: 'file'
        },
        {
          url: '../cellswipe/cellswipe',
          title: '滑动单元格',
          label: 'cellswipe'
        },
        // {
        //   url: '../slider/slider',
        //   title: '滑动选择器',
        //   label: 'slider'
        // },
        {
          url: '../message/message',
          title: '全局消息',
          label: 'message'
        },
        {
          url: '../form/form',
          title: '表单',
          label: 'form'
        },
        {
          url: '../address/address',
          title: '地址选择器',
          label: 'address'
        },
        {
          url: '../radio/radio',
          title: '单选',
          label: 'radio'
        }, {
          url: '../focus/focus',
          title: '焦点与校验',
          label: 'focus'
        }
      ],
    }, {
      title: '界面',
      data: [{
        url: '../button/button',
        title: '按钮',
        label: 'button'
      }, {
        url: '../vacancy/vacancy',
        title: '空置区',
        label: 'vacancy'
      }, {
        url: '../content/content',
        title: '主体',
        label: 'content'
      }, {
        url: '../tag/tag',
        title: '标签',
        label: 'tag'
      }, {
        url: '../layout/layout',
        title: '布局',
        label: 'layout'
      }, {
        url: '../rule/rule',
        title: '页底提示',
        label: 'rule'
      }, {
        url: '../tip/tip',
        title: '提示',
        label: 'tip'
      }]
    }]
  },

  onLoad() {
    this.setData({
      module_: this.data.module || []
    })
  },

  onSearch(e) {
    var that = this;
    let module_ = [];
    that.data.module.forEach(function(i, index) {
      module_[index] = {
        title: i.title,
        data: []
      }
      that.data.module[index].data.forEach(function(j) {
        if (j.title.indexOf(e.detail.value) >= 0 || j.url.indexOf(e.detail.value) >= 0 || j.label.indexOf(e.detail.value) >= 0) module_[index].data.push(j)
      })
    })
    that.setData({
      searchvalue: e.detail.value,
      module_
    })
  }
})
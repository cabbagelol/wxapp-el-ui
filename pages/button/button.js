const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '按钮',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    button: {
      plain: false,
      color: {
        essential: "#FFF"
      },
      type: {
        index: 0,
        value: [{
          name: 'primary',
          s: '主'
        }, {
          name: 'succeed',
          s: '成功'
        }, {
          name: 'warning',
          s: '警告'
        }, {
          name: 'danger',
          s: '严重'
        }, {
          name: 'default',
          s: '默认'
        }]
      },
      vibrate: true,
      show: true,
      size: {
        index: 1,
        value: [{
          name: 'mini',
          s: '小'
        }, {
          name: 'normal',
          s: '标准'
        }, {
          name: 'large',
          s: '大'
        }]
      },
      align: {
        index: 1,
        value: [{
          name: 'left',
          s: '左'
        }, {
          name: 'center',
          s: '中'
        }, {
          name: 'right',
          s: '右'
        }]
      },
      radius: false,
      disabled: false,
      load: true
    }
  },

  onButton() {
    wx.showToast({
      title: '你点击了按钮',
      icon: 'none'
    })
  }
})
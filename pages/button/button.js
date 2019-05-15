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
      color: {
        essential: "#FFF"
      },
      type: '',
      vibrate: true,
      show: true,
      size: 'normal',
      align: 'center',
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
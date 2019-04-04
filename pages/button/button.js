const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '按钮',
      back: true
    },
    button: {
      color: { essential: "#FFF"},
      show: true,
      size: 'normal',
      align:'center',
      radius: false,
      disabled: false,
      load: true
    }
  },

  onButton () {
    wx.showToast({
      title: '你点击了按钮',
      icon: 'none'
    })
  }
})
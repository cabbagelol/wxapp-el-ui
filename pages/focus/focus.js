const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '焦点',
      back: true
    },
    focus: {
      starts: true,
      type: 'danger'
    }
  },

  onTap () {
    wx.showToast({
      title: '点击事件',
      icon: 'none'
    })
  }
})
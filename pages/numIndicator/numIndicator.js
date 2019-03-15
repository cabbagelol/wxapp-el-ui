Page({
  data: {
    head: {
      title: '数字指示器',
      back: true
    },
  },

  onLoad: function (options) {

  },

  onNumIndicator (e) {
    console.log(e)
    wx.showToast({
      title: new String(e.detail.value),
      icon: 'none'
    })
  }
})
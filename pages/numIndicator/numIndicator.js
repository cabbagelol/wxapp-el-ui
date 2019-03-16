Page({
  data: {
    head: {
      title: '数字指示器',
      back: true
    },
  },

  onNumIndicator (e) {
    wx.showToast({
      title: new String(e.detail.value),
      icon: 'none'
    })
  }
})
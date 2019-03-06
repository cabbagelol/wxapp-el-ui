Page({
  data: {
    head: {
      title: 'Cell',
      back: true
    }
  },
  onCellClick (e) {
    wx.showToast({
      title: 'Clicking Cell',
      icon: 'success',
      duration: 2000
    })
  }
})  
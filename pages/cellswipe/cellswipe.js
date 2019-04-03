Page({
  data: {
    head: {
      title: 'cellswipe',
      back: true
    },
    cellswipe: {
      right: {
        show: 'right'
      },
      left: {
        show: 'left'
      }
    }
  },

  onSetShow (e) {
    this.setData({
      [e.target.dataset.e]: ''
    })
  },

  onSucceed () {
    wx.showToast({
      title: '点击完成'
    })
  },

  onCellswipe (e) {
    console.log(e)
  }
})
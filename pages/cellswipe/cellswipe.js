Page({
  data: {
    head: {
      title: '滑动单元格',
      back: true
    },
    cellswipe: {
      right: {
        show: 'right'
      },
      left: {
        show: ''
      }
    }
  },

  onShow () {
    var that = this;
    setTimeout(function () {
      that.setData({
        cellswipe: Object.assign(that.data.cellswipe, {
          right: {
            show: ''
          },
          left: {
            show: 'left'
          }
        })
      })
    }, 2000)
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
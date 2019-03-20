Page({
  data: {
    head: {
      stickie: true,
      title: '导航一',
      style: {
        background: '#FFF',
        textColor: '#000'
      },
      slot: {
          l: true,
          c: false,
          r: false
      },
      back: true
    }
  },

  onToast () {
    wx.showToast(
      {
        title: '弹窗成功'
      }
    )
  },

  onInput (e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  onSwitch (e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
})
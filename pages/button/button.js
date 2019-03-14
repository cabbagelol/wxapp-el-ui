Page({
  data: {
    head: {
      title: '按钮',
      back: true
    },
    button: {
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
  },
  
  onInput(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  onSwitch(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
})
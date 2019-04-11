Page({
  data: {
    head: {
      title: '数字指示器',
      back: true
    },
    numlndicatorslot: 0
  },

  onReady () {
    this.setSlot();
  },

  setSlot () {
    var that = this;
    var numlndicatorslot = that.data.numlndicatorslot;
    setInterval(function () {
      if (numlndicatorslot == 1) { numlndicatorslot = -1 }
      that.setData({
        numlndicatorslot: numlndicatorslot += 1
      })
    }, 2000)
  },

  onNumIndicator (e) {
    wx.showToast({
      title: new String(e.detail.value),
      icon: 'none'
    })
  }
})
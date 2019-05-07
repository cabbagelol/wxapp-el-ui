Page({
  data: {
    head: {
      title: '数字指示器',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
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
  },

  onCopy () {
    console.log('复制成功')
  }
})
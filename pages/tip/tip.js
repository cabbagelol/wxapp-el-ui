Page({
  data: {
    head: {
      title: '提示',
      back: true
    },
    tip: {
      type: 'success'
    }
  },

  setTipType(e) {
    this.setData({
      'tip.type': e.currentTarget.dataset.type
    })
  }
})
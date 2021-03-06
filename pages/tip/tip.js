Page({
  data: {
    head: {
      title: '提示',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    tip: {
      type: 'primary'
    }
  },

  setTipType(e) {
    this.setData({
      'tip.type': e.currentTarget.dataset.type
    })
  }
})
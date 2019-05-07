Page({
  data: {
    head: {
      title: '地址选择器',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    area: '',
    province: '',
    city: ''
  },

  onChange(e) {
    wx.showToast({
      title: e.detail.value,
      icon: 'none'
    })
    this.setData({
      area: e.detail.area,
      province: e.detail.province,
      city: e.detail.city,
    })
  }
})
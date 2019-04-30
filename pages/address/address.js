Page({
  data: {
    head: {
      title: '地址选择器',
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
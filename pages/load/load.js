Page({
  data: {
    head: {
      title: '装载与加载符',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    loading: {
      show: false,
      color: {
        essential: '#FFF',
        deputy: 'rgba(0, 0, 0, 0.06)'
      }
    },
    color: {
      essential: '#8BC34A',
      deputy: 'rgba(0, 0, 0, 0.06)'
    }
  },

  onLoading () {
    this.setData({
      'loading.show': this.data.loading.show != true
    })
  },

  onLoadtoast () {
    wx.showToast({
      title: '提示',
      icon: 'none'
    })
  },
})
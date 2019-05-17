const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '焦点与校验',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    focus: {
      starts: true,
      type: 'danger',
      verifications: {
        title: '不通过验证，存在以下问题:',
        0: {
          v: (value) => { return /\您\好/g.test(value)},
          msg: '不允许包含"您好"'
        }
      }
    },

  },

  onTap () {
    wx.showToast({
      title: '点击事件',
      icon: 'none'
    })
  },

  onImg (e) {
    console.log(e.detail.tempFilePaths[0])
    this.setData({
      'focus.img': e.detail.tempFilePaths[0]
    })
  },

  onForm (e) {
    console.log(e.detail)
  }
})
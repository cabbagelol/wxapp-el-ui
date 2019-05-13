const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '焦点与校验',
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

  onForm (e) {
    console.log(e.detail)
  }
})
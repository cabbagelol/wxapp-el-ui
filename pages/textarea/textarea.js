const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '多行输入框',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    textarea: {
      vibrate: true,
      copy: true,
      title: '备注',
      placeholder: '请输入备注内容',
      disabled: false,
      wordcount: 100
    }
  },

  onCopy (e) {
    wx.showToast({
      title: e.detail.code >= 0 ? '复制成功' : '复制失败',
    })
  }
})
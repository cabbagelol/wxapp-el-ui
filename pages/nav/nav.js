// pages/nav/nav.js
Page({
  data: {
    head: {
      title: '首页',
      back: true
    },
    head1: {
      title: '导航一',
      style: {
        background: 'red',
        textColor: '#fff'
      },
      back: true
    },
    head1: {
      title: '导航二',
      back: true
    }
  },

  onToast () {
    wx.showToast(
      {
        title: '弹窗成功'
      }
    )
  }
})
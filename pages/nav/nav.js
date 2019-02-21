// pages/nav/nav.js
Page({
  data: {
    head: {
      title: '导航一',
      back: true
    },
    head1: {
      title: '导航二',
      style: {
        background: 'red',
        textColor: '#fff'
      },
      back: true
    },
    head2: {
      title: '导航三',
      back: true
    },
  },

  onToast () {
    wx.showToast(
      {
        title: '弹窗成功'
      }
    )
  }
})
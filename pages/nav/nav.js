const app = getApp();

var page = {
  $: app.e.$,

  data: {
    head: {
      stickie: true,
      title: '导航一',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      slot: {
        l: true,
        c: false,
        r: false
      },
      back: true,
      backlenght: 2
    }
  },

  onToast() {
    wx.showToast(
      {
        title: '弹窗成功'
      }
    )
  },
}
Page(page);
module.exports = page;
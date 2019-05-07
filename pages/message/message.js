const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '全局消息',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    message: {
      typelist: ['success', 'warning', 'danger'],
      typelisti: 0,
      cont: `<div>现在时间是: </div><div>${new Date()}</div>`,
      type: 'success',
      icon: true,
      time: 3000,
      mask: false
    }
  },

  onReady() {
    this.messgae = this.selectComponent(".messgae");
  },

  onPicker (e) {
    this.setData({
      'message.typelisti': e.detail.value
    })
  },

  onMessageShow() {
    var that = this;
    that.setData({
      'message.ing': true
    })
    that.messgae.onMessage({
      title: '通知:',
      cont: that.data.message.cont,
      time: that.data.message.time,
      icon: that.data.message.icon,
      type: that.data.message.typelist[that.data.message.typelisti],
      mask: that.data.message.mask,
      succeed() {
        wx.showToast({
          title: '成功',
          icon: 'none'
        })
        that.setData({
          'message.ing': false
        })
      }
    })
  }
})
const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '全局消息',
      back: true
    },
    message: {
      cont: `现在时间是:
${new Date()}`,
      type: 'success',
      icon: true,
      time: 3000
    }
  },

  onReady () {
    this.messgae = this.selectComponent(".messgae");
  },

  onMessageShow () {
    var that = this;
    that.setData({
      'message.ing': true
    })
    that.messgae.onMessage({
      cont: that.data.message.cont,
      time: that.data.message.time,
      icon: that.data.message.icon,
      type: that.data.message.type,
      succeed () {
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

Page({
  data: {
    head: {
      title: '主体',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    content: {
      head: 0,
      body: 0,
      footer: 0
    },
    message: false
  },

  onReady () {
    this.body = this.selectComponent(".body");
  },

  openMessage () {
    var that =this;
    if (that.data.message) {return}
    that.setData({ message: true})
    that.body.data.message.onMessage({
      type: 'success',
      cont: '内容' + new Date(),
      time: 3000,
      succeed() {
        wx.showToast({
          title: '成功',
          icon: 'none'
        })
        that.setData({ message: false })
      }
    })
  },

  onScrollReady (e) {
    this.setData({
      'content.head': e.detail.body.head,
      'content.body': e.detail.body.body,
      'content.footer': e.detail.body.footer,
      'content.scrollButtonY': e.detail.body.scrollButtonY
    })
  },
})  
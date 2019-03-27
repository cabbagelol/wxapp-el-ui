Page({
  data: {
    head: {
      title: '主体',
      back: true
    },
    content: {
      head: 0,
      body: 0,
      footer: 0
    }
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
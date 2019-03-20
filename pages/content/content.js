Page({
  data: {
    head: {
      title: '主体',
      back: true
    },
    content: {
      head: 0,
      body: 0,
      footer: 0,
      scrollButtonY: 0,
      upperThreshold: 100,
      lowerThreshold: 100,
      autoFullscreenf: true,
      rubber: true,
      y: 0,
      tap: {
        y: -200
      }
    }
  },

  onScroll (e) {
    this.setData({
      'content.y': e.detail.scrollY
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

  onSetScroll (e) {
    this.setData({
      'content.y': e.target.dataset.value
    })
  },

  onInput(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  onSwitch(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
})  
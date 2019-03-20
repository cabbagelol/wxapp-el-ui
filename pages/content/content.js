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
      upperThreshold: 100,
      lowerThreshold: 100,
      autoFullscreenf: true,
      rubber: true,
      y: 0,
      tap: {
        y: 0
      }
    }
  },

  onScroll (e) {
    console.log(e)
    this.setData({
      'content.y': e
    })
  },

  onScrollReady (e) {
    this.setData({
      'content.head': e.detail.body.head,
      'content.body': e.detail.body.body,
      'content.footer': e.detail.body.footer
    })
  },

  onSetScroll (e) {
    this.setData({
      'content.y': e.detail.value
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
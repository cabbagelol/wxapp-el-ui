Page({
  data: {
    head: {
      title: '滚动',
      back: true
    },
    rolling: {
      isscroll: true,
      scrollbar: true,
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

  onScrollReady (e) {
    this.setData({
      'rolling.scrollButtonY': e.detail.scrollButtonY
    })
  },

  onScroll(e) {
    this.setData({
      'rolling.y': e.detail.scrollY
    })
  },

  onSetScroll(e) {
    this.setData({
      'rolling.y': e.target.dataset.value
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
const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '滚动',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
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
})
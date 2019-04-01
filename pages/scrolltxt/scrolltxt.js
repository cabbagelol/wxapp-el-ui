Page({
  data: {
    head: {
      title: '滚动幕布',
      back: true
    },
    scroll: {
      isscroll: false,
      drag: false,
      start: true,
      delay:3000,
      orientation: 'left',
      velocity: 1,
      cont: 'A network error has occurred. The service may be blocked by your ISP or in your area.',
      color: '#555',
      background: '#FFF',
      width: 500
    },
    array: [{ n: '左至右', v: 'left' }, { n: '右至左', v: 'right'}],
    arrayi: 0
  },

  bindPickerChange(e) {
    this.setData({
      arrayi: e.detail.value,
      'scroll.orientation': this.data.array[e.detail.value].v
    })
  },

  onInput(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  onSlider (e) {
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
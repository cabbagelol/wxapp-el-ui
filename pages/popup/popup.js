Page({
  data: {
    head: {
      title: '弹窗',
      back: true
    },
    popup: {
      show: false,
      modal: true
    },
    array: [{ n: '左', v: 'left' }, { n: '上', v: 'top' }, { n: '右', v: 'right' }, { n: '下', v: 'button' }],
    arrayi: 0
  },

  onPopup () {
    this.setData({
      'popup.show': this.data.popup.show != true
    })
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

  onSwitch(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
})
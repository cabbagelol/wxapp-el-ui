Page({
  data: {
    head: {
      title: '多行输入框',
      back: true
    },
    textarea: {
      title: '备注',
      placeholder: '请输入备注内容',
      disabled: false,
      wordcount: 100
    }
  },

  onTextarea (e) {
    this.setData({
      'textarea.value': e.detail.value
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
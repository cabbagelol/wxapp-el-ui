Page({
  data: {
    head: {
      title: '表单',
      back: true
    },
  },

  onForm (e) {
    console.log(e.detail.value)
  }
})
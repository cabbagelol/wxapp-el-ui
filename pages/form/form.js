Page({
  data: {
    head: {
      title: '表单',
      back: true
    },
    value: {}
  },

  onForm(e) {
    var value = '结果:<br/>';
    for (var i in e.detail.value) {
      value += `${i} = ${e.detail.value[i]} <br/>`
    }
    this.setData({
      value: value
    })
  }
})
Page({
  data: {
    head: {
      title: '表单',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
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
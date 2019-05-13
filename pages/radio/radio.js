const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '单选',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    radio: {
      a: {
        value: '1-3',
        isradio: false
      },
      b: {
        value: ''
      },
      c: {
        value: '',
        data: []
      }
    }
  },

  onReady () {
    var that = this;
    setTimeout(function () {
      that.setData({
        'radio.c.data': [1, 2, 3]
      })
    }, 200)
  },

  onForm(e) {
    console.log(e.detail)
  },

  onRadioGroup(e) {
    this.setData({
      'radio.a.value': e.detail.value,
      'radio.a.data': e.detail.data
    })
  }
})
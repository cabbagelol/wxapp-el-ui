const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '单选',
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
        value: ''
      }
    }
  },

  onForm (e) {
    console.log(e.detail)
  } ,

  onRadioGroup (e) {
    this.setData({
      'radio.a.value': e.detail.value,
      'radio.a.data': e.detail.data
    })
  }
})
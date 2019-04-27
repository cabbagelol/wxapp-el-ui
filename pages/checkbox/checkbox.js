const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '复选框',
      back: true
    },
    checkbox: {
      a: {
        value: [],
        data: []
      },
      b: {
        value: ["a1", "a2", "a8", "a9"]
      }
    }
  },

  onForm (e) {
    console.log(e.detail.value)
  },

  onCheckboxGroup (e) {
    this.setData({
      'checkbox.a.value': e.detail.value,
      'checkbox.a.data': e.detail.data
    })
  }
})
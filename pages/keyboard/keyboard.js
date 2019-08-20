const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '键盘',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    value: ''
  },

  onLoad (options) {
    this.keyboard = this.selectComponent(".keyboard");
    this.onKeyboardShow();
  },

  onInput (e) {
    this.setData({
      value: e.detail.value
    })
  },

  onKeyboardShow () {
    this.keyboard.onShow();
  },

  onKeyboardHide () {
    this.keyboard.onHide();
  }
})
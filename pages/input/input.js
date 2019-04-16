const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '输入框',
      back: true
    },
    value: {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '默认内容',
      f: '',
      g: '',
      h: ''
    }
  },
})
const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '输入框',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    value: {
      a: '',
      b: '',
      c: '',
      d: '', 
      e: '默认内容',
      f: '233',
      g: '',
      h: ''
    }
  },
})
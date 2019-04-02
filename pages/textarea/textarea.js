const app = getApp();

Page({
  $: app.e.$,

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
})
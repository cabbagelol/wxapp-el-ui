const app = getApp();

Page({
  $: app.e.$,
  data: {
    head: {
      title: '页底提示',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    rule: {
      title: '自定标题',
      lines: {
        color: "#E3E3E3",
        width: 10,
        height: 1
      },
      font: {
        color: "#555",
        margin: 10,
        size: 10
      }
    }
  }
})
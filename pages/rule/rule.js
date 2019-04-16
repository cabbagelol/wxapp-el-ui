const app = getApp();

Page({
  $: app.e.$,
  data: {
    head: {
      title: '页底提示',
      back: true
    },
    rule: {
      title: '自定义标题',
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
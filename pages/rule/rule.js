const app = getApp();
Page({
  $: app.e.$,
  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '标签页标题',
      back: true
    },
    rule: {
      lines: {
        color: "#666",
        width: 20,
        height: 1
      },
      font: {
        color:"#666",
        margin: 10,
        size: 30
      }
    }

  }
})
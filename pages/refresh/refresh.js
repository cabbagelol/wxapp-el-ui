const app = getApp()
const path = '/praise/pages/praise/'

Page({
  data: {
    head: {
      title: '下拉刷新',
      back: true
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: path,
    })
  },

  onLoad() {
    this.refreshView = this.selectComponent("#refreshView")
  },

  //触摸开始
  handletouchstart: function(event) {
    this.refreshView.handletouchstart(event)
  },

  //触摸移动
  handletouchmove: function(event) {
    this.refreshView.handletouchmove(event)
  },

  //触摸结束
  handletouchend: function(event) {
    this.refreshView.handletouchend(event)
  },

  //触摸取消
  handletouchcancel: function(event) {
    this.refreshView.handletouchcancel(event)
  },

  //页面滚动
  onPageScroll: function(event) {
    this.refreshView.onPageScroll(event)
  },

  onPullDownRefresh: function() {
    setTimeout(() => {
      this.refreshView.stopPullRefresh()
    }, 5000)
  }
})
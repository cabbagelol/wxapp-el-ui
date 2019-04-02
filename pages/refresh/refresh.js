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

  handletouchstart: function(event) {
    this.refreshView.handletouchstart(event)
  },

  handletouchmove: function(event) {
    this.refreshView.handletouchmove(event)
  },

  handletouchend: function(event) {
    this.refreshView.handletouchend(event)
  },

  handletouchcancel: function(event) {
    this.refreshView.handletouchcancel(event)
  },

  onPageScroll: function(event) {
    this.refreshView.onPageScroll(event)
  },

  onPullDownRefresh: function() {
    this.refreshView.stopPullRefresh()
  }
})
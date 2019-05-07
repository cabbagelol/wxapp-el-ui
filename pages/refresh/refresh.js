const app = getApp()
const path = '/praise/pages/praise/'

Page({
  data: {
    head: {
      title: '下拉刷新',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    refresh: {
      load: false
    }
  },

  onLoad() {
    this.refreshView = this.selectComponent(".refresh");
  },

  /**
   * 内部刷新状态变动
   */
  onRefreshEvent (value_) {
    console.log(value_.detail)
  },

  /**
   * 处于设置refreshHeight的值触发刷新
   */
  onPullRefresh() {
    var that = this;
    console.log('onPullRefresh')
    that.setData({
      'refresh.load': true
    })
    setTimeout(() => {
      that.setData({
        'refresh.load': false
      })
      that.refreshView.stopPullRefresh();
    }, 2000);
  },
})
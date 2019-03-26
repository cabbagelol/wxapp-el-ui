let lastY = 0
const PULL_DEFAULT = -1 //默认
const PULL_LT_HEIGHT = 1 //下拉小于高度
const PULL_GT_HEIGHT = 2 //下拉大于高度
const PULL_REFRESHING = 0 //刷新中
let platform = 'ios', scale = 375 / wx.getSystemInfoSync().windowWidth * 2
Component({
  properties: {
    backgroundColor: {
      type: String,
      value: "#000"
    },
    refreshHeight: {
      type: Number,
      value: 150
    },
    textColor: {
      type: String,
      value: "white"
    }
  },

  data: {
    refresh: {
      transition: 200,
      dynamicHeight: 0
    },
    pullState: PULL_DEFAULT, // 刷新状态 -1:默认  1:开始下拉  2: 达到下拉最大距离  0: 正在刷新 
    dynamicHeight: 0, //刷新布局动态高度
    refreshHeight: 150, //触发刷新的最小高度
    scrollTop: 0
  },

  created () {
    platform = wx.getSystemInfoSync().platform
    scale = wx.getSystemInfoSync().windowWidth / 375 * 2
  },

  methods: {
    autoRefresh() {
      this._pullStateChange(PULL_REFRESHING, this.data.refreshHeight)
      this.triggerEvent("onRefresh")
    },

    stopPullRefresh() {
      // this._pullStateChange(PULL_DEFAULT, 0)
      this.setData({
        pullState: PULL_DEFAULT,
        'refresh.dynamicHeight': 0
      }, () => {
        wx.pageScrollTo({ scrollTop: 0, duration: 0 })
      })
    },

    isRefreshing() {
      return PULL_REFRESHING == this.data.pullState
    },

    isPullState() {
      return PULL_DEFAULT != this.data.pullState
    },

    handletouchstart (event) {
      lastY = event.touches[0].clientY
    },

    handletouchmove (event) {
      let pageY = event.touches[0].pageY
      let clientY = event.touches[0].clientY
      let offsetY = clientY - lastY
      if (this.data.scrollTop > 0 || offsetY < 0) return
      let dynamicHeight = this.data.refresh.dynamicHeight + offsetY
      if (dynamicHeight > this.data.refreshHeight) {
        this._pullStateChange((0 == this.data.pullState) ? 0 : PULL_GT_HEIGHT, dynamicHeight, 0)
      } else {
        dynamicHeight = dynamicHeight < 0 ? 0 : dynamicHeight //如果动态高度小于0处理
        this._pullStateChange((0 == this.data.pullState) ? 0 : PULL_LT_HEIGHT, dynamicHeight, 0)
      }
      lastY = event.touches[0].clientY
    },

    handletouchend (event) {
      let refreshHeight = this.data.refreshHeight
      if (0 == this.data.pullState) {
        this._pullStateChange(PULL_REFRESHING, refreshHeight, 200)
        return
      }

      let dynamicHeight = this.data.refresh.dynamicHeight
      if (this.data.scrollTop > 0 && PULL_DEFAULT != this.data.pullState) {
        if (dynamicHeight - scale * this.data.scrollTop > refreshHeight) {
          this._pullStateChange(PULL_REFRESHING, refreshHeight, 200)
          this.triggerEvent("onRefresh")
        } else {
          this._pullStateChange(PULL_DEFAULT, 0, 200)
          wx.pageScrollTo({ scrollTop: 0, duration: 0 })
        }
        return
      }
      if (dynamicHeight >= this.data.refreshHeight) {
        this._pullStateChange(PULL_REFRESHING, refreshHeight, 200)
        this.triggerEvent("onRefresh")
      } else {
        this._pullStateChange(PULL_DEFAULT, 0, 200)
      }
    },

    handletouchcancel (event) {
      this._pullStateChange(PULL_DEFAULT, 0, 200)
    },

    onPageScroll (event) {
      if (event.scrollTop > 0 && PULL_DEFAULT != this.data.pullState) {
        if (this.data.dynamicHeight - scale * event.scrollTop < this.data.refreshHeight) {
          this.setData({
            pullState: PULL_LT_HEIGHT
          })
        } else {
          this.setData({
            pullState: PULL_GT_HEIGHT
          })
        }
      }
      this.data.scrollTop = event.scrollTop
    },

    _isAndriod() {
      return 'ios' == platform
    },

    _pullStateChange(state_, dynamicHeight_, time_) {
      this.setData({
        pullState: state_,
        'refresh.dynamicHeight': dynamicHeight_,
        'refresh.transition': time_ || 0
      })
      this.triggerEvent("onPullState")
    }
  }
})
import Elui from '../baseComponent';
Elui({
  options: {
    multipleSlots: true
  },

  properties: {
    load: {
      type: Boolean,
      value: false
    },
    stickie: {
      type: Boolean,
      value: true
    },
    head: {
      type: Object,
      value: {}
    }
  },

  data: {
    nav: {
      interne: {
        navHeight: 100
      }
    }
  },

  attached() {
    var that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          nav: Object.assign(res, {
            interne: {
              navHeight: res.statusBarHeight + 45
            }
          })
        })
      }
    })
  },

  methods: {
    onBack(data_) {
      wx.navigateBack({
        delta: this.data.head.backlenght || 1
      })
    }
  }
})
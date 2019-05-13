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
    var info = wx.getSystemInfoSync();
    that.setData({
      nav: Object.assign(info, {
        interne: {
          navHeight: info.statusBarHeight + 45
        }
      })
    })
  },

  methods: {
    onBack(data_) {
      wx.navigateBack({
        delta: this.data.head.backlenght || 1,
        fail (err) {
          console.log(err)
        }
      })
    }
  }
})
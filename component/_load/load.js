Component({
  properties: {
    size: String,
    type: String
  },

  data: {

  },

  ready () {
    var that = this
    wx.createSelectorQuery().in(this).select('#load').boundingClientRect(function (rect) {
      if (!that.data.size) {
        that.setData({
          size: (rect.width * rect.height) / 1000
        })
      }
    }).exec()
  },

  methods: {
  }
})

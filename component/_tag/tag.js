Component({
  properties: {
    color: String,
    size: String,
    plain: {
      type: Boolean,
      value: false
    },
    round: Boolean,
    textColor: String
  },

  data: {
  },

  ready (e) {
    console.log(wx)
    // wx.createSelectorQuery().in(this).select('.__tag__').fields({
    //   dataset: true,
    //   size: true,
    //   scrollOffset: true,
    //   properties: ['scrollX', 'scrollY'],
    //   computedStyle: ['margin', 'backgroundColor'],
    //   context: true,
    // }, function (res) {
    //   console.log(res)
    // }).exec()
  },
  
  methods: {

  }
})

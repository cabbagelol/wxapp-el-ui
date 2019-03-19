const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  data: {
    content: {
      head: { height: 0 },
      body: {
        height: 0,
        tap: {
          top: 0,
          duration: 0
        },
        view: { height: 0 }
      },
      footer: { height: 0 }
    }
  },

  ready() {
    var that = this;
    var info = wx.getSystemInfoSync();

    if (config.util.in(this)) {
      config.util.$('.__content-head__').then(function(e) {
        that.setData({
          'content.head.height': e.height
        })
      })
      config.util.$('.__content-footer__').then(function(e) {
        that.setData({
          'content.footer.height': e.height
        })
      })
      config.util.$('.__content-footer-view__').then(function(e) {
        that.setData({
          'content.body.view.height': e.height
        })
      })
      config.util.$('.__content-body__').then(function(e) {
        that.setData({
          'content.body.height': info.screenHeight - that.data.content.head.height - that.data.content.footer.height
        })
      })
    }
  },

  methods: {
    onBodyStart(e) {
      var that = this
      if (e.changedTouches[0].length <= 1) { return }
      this.setData({
        'content.body.tap.starttime': new Date().getTime(),
        'content.body.tap.start': e.changedTouches[0].pageY,
        'content.body.tap.duration': 0
      })
    },

    onBodyEnd(e) {
      var that = this

      // var speed = (e.changedTouches[0].pageY - that.data.content.body.tap.start) / (that.data.content.body.tap.starttime - new Date().getTime())
      // var time = setInterval(function () {
      //   speed = speed - 0.1;
      //   that.setData({
      //     'content.body.tap.top': that.data.content.body.tap.top - speed,
      //     'content.body.tap.duration': 200
      //   })
      //   if (speed <= 0) { clearInterval(time) }
      // }, 20)
      if (that.data.content.body.tap.top >= 0) {
        that.setData({
          'content.body.tap.top': 0,
          'content.body.tap.duration': 200
        })
      } else if (that.data.content.body.tap.top <= -(that.data.content.body.view.height - that.data.content.body.height)) {
        that.setData({
          'content.body.tap.top': -(that.data.content.body.view.height - that.data.content.body.height),
          'content.body.tap.duration': 200
        })
      }
      that.setData({
        test: that.data.content.body.tap.top
      })
    },

    y: 0,

    onBodyMove(e) {
      var that = this;
      var point = e.changedTouches[0],
        calcY = point.pageY - that.data.content.body.tap.start + that.data.test
      if (that.data.content.body.tap.top >= 100) { return }
      that.setData({
        'content.body.tap.top': calcY
      })
    },

    oncalc (val_) {
      var val = val_;
      console.log(val)
      return val
    },

    isNumber(old_, new_) {
      return new_ > old_ ? true : false
    },

  }
})
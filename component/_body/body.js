const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  properties: {
    animation: Number,
    scrollY: {
      type: Number,
      value: 0
    },
    fullscreem: Boolean,
    rubber: Boolean,
    upperThreshold: {
      type: Number,
      value: 0
    },
    lowerThreshold: {
      type: Number,
      value: 0
    }
  },

  observers: {
    'scrollY': function(newNumber_) {
      this.setSrcollData(newNumber_, this.data.animation || 200)
    }
  },

  data: {
    content: {
      head: {
        height: 0
      },
      body: {
        height: 0,
        tap: {
          top: 0,
          end: 0,
          duration: 0
        },
        view: {
          height: 0
        }
      },
      footer: {
        height: 0
      }
    }
  },

  ready() {
    var that = this;
    var info = wx.getSystemInfoSync();
    if (config.util.in(that)) {
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
        that.srcollHead = -(that.data.content.body.view.height - that.data.content.body.height);
        that.triggerEvent('ready', {
          body: {
            head: that.data.content.head.height,
            body: that.data.content.body.height,
            footer: that.data.content.footer.height,
            scrollButtonY: that.srcollHead
          },
          scrollY: that.data.content.body.tap.top
        })
      })
    }
  },

  methods: {
    onBodyStart(e) {
      var that = this
      if (e.changedTouches[0].length <= 1) {
        return
      }
      this.setData({
        'content.body.tap.starttime': new Date().getTime(),
        'content.body.tap.start': e.changedTouches[0].pageY,
        'content.body.tap.duration': 0,
        'content.body.tap.end': this.data.content.body.tap.top
      })
    },

    onBodyEnd(e) {
      var that = this;
      if (that.data.content.body.tap.top >= 0) {
        that.setSrcollData(0, that.data.animation || 200)
      } else if (that.data.content.body.tap.top <= that.srcollHead) {
        that.setSrcollData(that.srcollHead > 0 ? 0 : that.srcollHead, that.data.animation || 200)
      }
    },

    onBodyMove(e) {
      var that = this;
      var point = e.changedTouches[0]
      var calcY = point.pageY - that.data.content.body.tap.start + that.data.content.body.tap.end;
      if (that.data.upperThreshold && calcY > that.data.upperThreshold) {
        calcY = that.data.upperThreshold
      } else if (that.data.lowerThreshold > 0 && calcY < that.srcollHead - that.data.lowerThreshold) {
        calcY = that.srcollHead - that.data.lowerThreshold
      }
      if (!that.data.rubber && calcY >= 0) {
        calcY = 0
      } else if (!that.data.rubber && calcY < that.srcollHead) {
        calcY = that.srcollHead
      }
      that.setSrcollData(calcY, 0)
      that.getSrcollData()
    },

    getSrcollData() {
      this.triggerEvent('scroll', {
        scrollY: this.data.content.body.tap.top
      })
    },

    setSrcollData(number_, time_) {
      this.setData({
        'content.body.tap.top': number_ || 0,
        'content.body.tap.duration': time_ || 0,
      })
    },
  }
})
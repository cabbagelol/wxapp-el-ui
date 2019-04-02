const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  properties: {
    animation: Number,
    isscroll: {
      type: Boolean,
      value: true
    },
    scrollY: {
      type: Number,
      value: 0
    },
    scrollbar: {
      type: Boolean,
      value: true
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
    'scrollY': function (newNumber_) {
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
        scrollbarHeight: 0,
        scrollbarTop: 0,
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
      config.util.$('.__content-footer-view__').then(function (e) {
        that.setData({
          'content.body.view.height': e['.__content-footer-view__'].height
        })
      })
      config.util.$('.__content-body__').then(function (e) {
        that.setData({ 'content.body.height': e['.__content-body__'].height })
        that.srcollHead = -(that.data.content.body.view.height - that.data.content.body.height);
        that.setData({ 'content.body.scrollbarHeight': -(that.data.content.body.height / that.srcollHead) * 100 })
        that.triggerEvent('ready', {
          height: that.data.content.body.height,
          scrollButtonY: that.srcollHead
        })
      })
    }
  },

  methods: {
    onBodyStart(e) {
      var that = this;
      if (e.changedTouches[0].length <= 1) {
        return;
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

      if (!that.data.isscroll) { return }

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
      that.setSrcollData(calcY, 100)
      that.getSrcollData()
    },

    getSrcollData() {
      this.triggerEvent('scroll', {
        scrollY: this.data.content.body.tap.top
      })
    },

    setSrcollData(number_, time_) {
      var that = this
      that.setData({
        'content.body.tap.top': number_ || 0,
        'content.body.tap.duration': time_ || 0,
        'content.body.scrollbarHeight': -(that.data.content.body.height / that.srcollHead) * 100
      })
      var sTop = (that.data.content.body.tap.top / that.srcollHead) * 100
      if (sTop >= 0 && sTop <= 100) {
        that.setData({
          'content.body.scrollbarTop': sTop - (sTop >= 1 ? (that.data.content.body.scrollbarHeight / that.data.content.body.height * 100) : 0)
        })
      }
    },
  }
})
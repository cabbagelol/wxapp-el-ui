const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  properties: {
    color: String,
    show: {
      type: String,
      value: ''
    },
    disabled: Boolean
  },

  observers: {
    'show': function(show_) {
      this.onSetShowValue(show_, 200)
    }
  },

  data: {
    delBtnWidth: 180,
    cellswipe: {
      duration: 0,
      left: 0,
      startX: 0,
      endX: 0,
      rightW: 0,
      leftW: 0
    }
  },

  ready() {
    var that = this;
    that.systeminfo = wx.getSystemInfoSync();
    if (config.util.in(that)) {
      config.util.$('.__cellswipe-controller-right__,.__cellswipe-controller-center__,.__cellswipe-controller-left__').then(function(e) {
        that.setData({
          'cellswipe.rightW': e['.__cellswipe-controller-right__'] ? e['.__cellswipe-controller-right__'].width : 0,
          'cellswipe.leftW': e['.__cellswipe-controller-left__'] ? e['.__cellswipe-controller-left__'].width : 0,
          'cellswipe.centerH': e['.__cellswipe-controller-center__'] ? e['.__cellswipe-controller-center__'].height : 0,
          'cellswipe.left': that.data.cellswipe.left - e['.__cellswipe-controller-left__'] ? e['.__cellswipe-controller-left__'].width : 0
        })
        that.onSetShowValue(that.data.show)
      })
    }
  },

  methods: {
    onTap() {
      var that = this;
      that.setData({
        'cellswipe.rightWs': 0,
        'cellswipe.endX': 0,
        'cellswipe.startX': 0,
        'cellswipe.left': 0 - that.data.cellswipe.leftW || 0,
        'cellswipe.duration': 200
      })
    },

    touchStart(e) {
      var that = this;
      var point = e.changedTouches[0];
      if (e.changedTouches.length > 1) {
        return
      }
      that.setData({
        'cellswipe.startX': point.pageX,
        'cellswipe.endX': -that.data.cellswipe.left,
        'cellswipe.duration': 0
      })
    },

    touchEnd(e) {
      var that = this;
      var point = e.changedTouches[0];
      var calcX = that.data.cellswipe.left;
      if (e.changedTouches.length > 1) {
        return
      }
      calcX = that.isF() ? 0 : -that.data.cellswipe.rightW - that.data.cellswipe.leftW;
      that.onChange({
        show: calcX == 0 ? 'left' : 'right'
      })
      that.setData({
        'cellswipe.left': calcX,
        'cellswipe.endX': point.pageX,
        'cellswipe.duration': 200
      })
    },

    touchMove(e) {
      var that = this;
      var point = e.changedTouches[0];
      var calcX = point.pageX - (that.data.cellswipe.startX + that.data.cellswipe.endX);
      if (e.changedTouches.length > 1) {
        return;
      }
      if (that.data.cellswipe.leftW <= 0 && calcX > that.data.cellswipe.leftW) {
        calcX = 0
      }
      if (that.data.cellswipe.rightW <= 0 && calcX < -that.data.cellswipe.leftW) {
        calcX = -that.data.cellswipe.leftW
      }
      if (!!that.data.color == false && (calcX >= 0 || calcX <= -that.data.cellswipe.leftW)) {
        return;
      }
      this.setData({
        'cellswipe.left': calcX,
        'cellswipe.rightWs': that.data.cellswipe.rightW + (-calcX - that.data.cellswipe.rightW) || 0,
        'cellswipe.leftWs': that.data.cellswipe.leftW - (-calcX - that.data.cellswipe.leftW) || 0
      })
    },

    /**
     * true 正， false 反
     */
    isF() {
      var ret;
      var val = this.data.cellswipe.left + this.data.cellswipe.leftW > 0;
      if (val > 0) {
        ret = true
      } else if (val < 0) {
        ret = false;
      } else {
        ret = 0
      }
      return ret;
    },

    onChange(data_) {
      if (this.data.disabled) {return}
      this.triggerEvent('change', Object.assign(data_, {
        type: 'cellswipe'
      }))
    },

    onSetShowValue(show_, time_) {
      var that = this;
      if (show_) {
        var val = 0;
        switch (show_) {
          case 'left':
            val = 0
            break;
          case 'right':
            val = -that.data.cellswipe.rightW - that.data.cellswipe.leftW
            break;
        }
      } else {
        val = -that.data.cellswipe.leftW
      }
      that.setData({
        'cellswipe.left': val,
        'cellswipe.duration': time_ || 0
      })
    },
  }
})
const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  properties: {
    color: {
      type: String,
      value: 'inherit'
    },
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
        return;
      };
      that.onChange({
        show: (function() {
          if (that.isF() > 0) {
            calcX = 0;
          } else if (that.isF() < 0) {
            calcX = -that.data.cellswipe.rightW - that.data.cellswipe.leftW;
          } else if (that.isF() == 0) {
            calcX = -that.data.cellswipe.leftW
          }
          return calcX;
        })()
      })
      that.setData({
        'cellswipe.left': calcX,
        'cellswipe.endX': point.pageX,
        'cellswipe.duration': 200
      })
    },

    touchMove(e) {
      const that = this;
      const point = e.changedTouches[0];
      const scroollx = that.data.cellswipe.left;
      var calcX = point.pageX - (that.data.cellswipe.startX + that.data.cellswipe.endX);
      if (that.data.cellswipe.leftW <= 0 && calcX > that.data.cellswipe.leftW) {
        calcX = 0
      }
      if (that.data.cellswipe.rightW <= 0 && calcX < -that.data.cellswipe.leftW) {
        calcX = -that.data.cellswipe.leftW
      }
      if (that.isF() > 0) {
        if (that.data.color == 'inherit' && calcX > 0) {
          calcX = 0;
          return;
        }
      } else if (that.isF() < 0) {
        if (that.data.color == 'inherit' & calcX < -that.data.cellswipe.rightW) {
          calcX = -that.data.cellswipe.rightW;
          return;
        }
      }
      this.setData({
        'cellswipe.left': calcX,
        'cellswipe.rightWs': that.data.cellswipe.rightW + (-calcX - that.data.cellswipe.rightW) || 0,
        'cellswipe.leftWs': that.data.cellswipe.leftW - (-calcX - that.data.cellswipe.leftW) || 0
      })
    },

    /**
     * 判断正反
     * true 正， false 反
     */
    isF() {
      var ret;
      const val = this.data.cellswipe.left + this.data.cellswipe.leftW;
      if (val > 0) {
        ret = 1
      } else if (val < 0) {
        ret = -1;
      } else {
        ret = val
      }
      return ret;
    },

    /**
     * 更新滑动控制器的值
     */
    onChange(data_) {
      if (this.data.disabled) {
        return
      }
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
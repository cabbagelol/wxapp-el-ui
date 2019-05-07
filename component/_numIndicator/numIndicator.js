const config = require("../index.js");

Component({
  externalClasses: [
    'el-button-left',
    'el-button-right',
    'el-button-disabled',
    'el-input',
    'el-input-disabled'
  ],

  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
    copy: {
      type: Boolean,
      value: true
    },
    index: Number,
    value: Number,
    min: Number,
    max: Number,
    superposition: {
      type: Number,
      value: 1
    },
    longtag: Boolean
  },

  data: {
    numlndicator: {
      left: true,
      right: true
    },
    value: 0,
    setTime: () => { }
  },

  ready() {
    var that = this
    if (!that.data.value) {
      that.setData({
        value: that.data.min
      })
    }
    if (config.util.in(that)) {
      config.util.$('.__numIndicator-left__,.__numIndicator-right__').then(function (e) {
        var conf = {
          left: true,
          right: true
        };
        if (e[".__numIndicator-left__"].width == 0) {
          conf.left = false
        }
        if (e[".__numIndicator-right__"].width == 0) {
          conf.right = false
        }
        that.setData({
          numlndicator: Object.assign(that.data.numlndicator, conf)
        })
      })
    }
  },

  methods: {
    settriggerEvent(e) {
      var that = this;
      var calcValue = that.data.value;
      if (that.data.min && calcValue <= that.data.min) {
        calcValue = that.data.min
      } else if (that.data.max && calcValue >= that.data.max) {
        calcValue = that.data.max
      }
      that.triggerEvent('change', {
        el: e,
        index: that.data.index,
        value: calcValue
      })
      that.setData({ value: calcValue })
    },

    onInput(e) {
      var InputWidth = 0;
      var Value = e.detail.value;
      this.setData({
        value: e.detail.value,
        inputWidth: Value.toString().length * 20
      })
      this.settriggerEvent(e)
    },

    onStop() {
      clearInterval(that.data.setTime)
    },

    onTapStart(e) {
      var that = this;
      if (!that.data.longtag) { return }
      that.setData({
        setTime: setInterval(function () {
          that.onChange(e)
          that.triggerEvent('holdtap', {
            el: e,
            value: that.data.value
          })
        }, 100)
      })
    },

    onTapEnd(e) {
      var that = this;
      if (!that.data.longtag) { return }
      clearInterval(that.data.setTime);
      that.triggerEvent('tapend', {
        el: e,
        value: that.data.value
      })
    },

    onChange(e) {
      var that = this;
      const V_ = that.data.value;
      const S_ = that.data.superposition;
      if (that.data.disabled) {return}
      switch (e.target.dataset.type) {
        case 'reduce':
          if (that.data.min ? that.data.value > that.data.min : true) {
            that.setData({
              value: ((S_ % 1 == 0 ? V_ : V_ * 1000) - (S_ % 1 == 0 ? S_ : S_ * 1000)) / (S_ % 1 == 0 ? 1 : 1000) || 1
            })
          }
          break
        case 'add':
        //  number_ % 1 === 0 ? number_ : number_ * 1000
          if (that.data.value < that.data.max || !that.data.max) {
            that.setData({
              value: ((S_ % 1 == 0 ? V_ : V_ * 1000) + (S_ % 1 == 0 ? S_ : S_ * 1000)) / (S_ % 1 == 0 ? 1 : 1000) || 1
            })
          }
          break
      }
      wx.vibrateShort();
      that.setData({
        inputWidth: that.data.value.toString().length * 20
      })
      that.settriggerEvent(e)
    },

    onLongTap() {
      var that = this;
      if (!that.data.copy && that.data.disabled) { return }
      wx.setClipboardData({
        data: String(that.data.value),
        success() {
          that.triggerEvent('copy', {
            code: 0,
            value: that.data.value
          })
        },
        fail(err) {
          that.triggerEvent('copy', {
            code: -1
          })
        }
      })
    },
  }
})
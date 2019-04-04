const config = require("../index.js");

Component({
  externalClasses: [
    'el-textarea',
    'el-title',
    'el-wordcount'
  ],

  options: {
    addGlobalClass: true
  },

  properties: {
    textarea: {
      type: Object,
      value: {
        style: {
          height: 130,
          minHeight: 0,
          maxHeight: null
        }
      }
    },
    copy: {
      type: Boolean,
      value: true
    },
    title: String,
    value: String,
    placeholder: String,
    wordcount: Number,
    name: String,
    disabled: {
      type: Boolean,
      value: false
    },
    vibrate: {
      type: Boolean,
      value: false
    }
  },

  data: {
    textareaMaxHeight: 0,
    placeholder: '输入内容',
    value: '',
    cursor: 0
  },

  ready() {
    var that = this
    var sysinfo = wx.getSystemInfoSync();
    that.setData({
      textareaMaxHeight: sysinfo.screenHeight / 2
    })
  },

  methods: {
    onInput(e) {
      var that = this
      that.setData({
        value: e.detail.value,
        cursor: e.detail.cursor
      })
      that.triggerEvent('input', {
        type: e.type,
        value: that.data.value,
        e: e
      })
      if (that.data.vibrate) {
        wx.vibrateShort();
      }
    },

    onLongTap () {
      var that = this;
      if (!that.data.copy || that.data.disabled) {return}
      wx.setClipboardData({
        data: that.data.value,
        success () {
          that.triggerEvent('copy', {
            code: 0,
            value: that.data.value
          })
        },
        fail () {
          that.triggerEvent('copy', {
            code: -1
          })
        }
      })
    }
  }
})
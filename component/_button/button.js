Component({
  externalClasses: [
    'el-button'
  ],

  options: {
    addGlobalClass: true,
  },

  properties: {
    vibrate: {
      type: Boolean,
      value: true
    },
    style: String,
    disabled: Boolean,
    radius: Boolean,
    size: String,
    align: String,
    playIndex: {
      type: null,
      value: null
    },
    page: {
      type: String,
      value: 'index'
    }
  },
 
  ready() {
  },

  methods: {
    onvibrate () {
      if (this.data.vibrate) {
        wx.vibrateShort();
      }
    },

    onTap(e) {
      this.triggerEvent('tag', e);
      this.onvibrate();
    },

    onLongtap () {
      var that = this;
      that.taping = setInterval(function () {
        that.onvibrate();
      }, 200) 
    },

    onLogintapEnd () {
      clearInterval(this.taping)
    }
  }
})
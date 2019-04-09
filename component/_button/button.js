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
    type: String,
    page: {
      type: String,
      value: 'index'
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    }
  },

  ready() {},

  methods: {
    onvibrate() {
      if (this.data.vibrate) {
        wx.vibrateShort();
      }
    },

    onTap(e) {
      var that = this;
      const form = this.getRelationNodes('../_form/form');
      that.triggerEvent('tag', e);
      that.onvibrate();
      switch (that.data.type) {
        case 'submit':
          form[0].onFormSubmit();
          break;
        case 'reset':  
          form[0].onFormReset();
          break;
      }
    },

    onLongtap() {
      var that = this;
      that.taping = setInterval(function() {
        that.onvibrate();
      }, 200)
    },

    onLogintapEnd() {
      clearInterval(this.taping)
    }
  }
})
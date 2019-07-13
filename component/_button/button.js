import Elui from '../baseComponent';
Elui({
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
    disabled: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: '5'
    },
    align: {
      type: String,
      value: 'center'
    },
    playIndex: {
      type: null,
      value: null
    },
    type: {
      type: String,
      value: ''
    },
    plain: {
      type: Boolean,
      value: false
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    }
  },

  methods: {
    onVibrate() {
      if (this.data.vibrate) {
        wx.vibrateShort();
      }
    },

    onTap(e) {
      var that = this;
      const form = this.getRelationNodes('../_form/form');
      that.triggerEvent('tag', e);
      that.onVibrate();
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
        that.onVibrate();
      }, 200)
    },

    onLogintapEnd() {
      clearInterval(this.taping);
    }
  }
})
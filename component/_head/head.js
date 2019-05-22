import Elui from '../baseComponent';
Elui({
  options: {
    multipleSlots: true
  },

  properties: {
    load: {
      type: Boolean,
      value: false
    },
    stickie: {
      type: Boolean,
      value: true
    },
    head: {
      type: Object,
      value: {}
    }
  },

  relations: {
    '../_body/body': {
      type: 'parent',
      linked(parent) {
        this.parent = parent;
      }
    }
  },

  data: {
    nav: {
      disabled: false,
      interne: {
        navHeight: 100
      }
    }
  },

  attached() {
    var that = this;
    var info = wx.getSystemInfoSync();
    that.setData({
      nav: Object.assign(info, {
        interne: {
          navHeight: info.statusBarHeight + 45
        }
      })
    })
  },
  
  ready () {
    var that = this;
    that.setData({
      'nav': Object.assign(that.data.nav, {
        disabled: getCurrentPages().length <= 1 ? true : false
      })
    })
    if (!!that.parent) {
      that.parent.getDom(true);
    }
  },

  methods: {
    onBack(data_) {
      if (this.data.nav.disabled) {
        const url = '/pages/index/index';
        wx.navigateTo({
          url,
          fail () {
            wx.switchTab({url})
          }
        })
        return;
      }
      wx.navigateBack({
        delta: this.data.head.backlenght || 1,
        fail (err) {
          console.log(err)
        }
      })
    }
  }
})
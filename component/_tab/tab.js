import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-nav',
    'el-nav-item',
    'el-content'
  ],

  options: {
    multipleSlots: true
  },

  properties: {
    active: {
      type: String,
      value: ''
    },
    isscroll: {
      type: Boolean,
      value: true
    },
    animation: {
      type: Boolean,
      value: false
    },
    index: Number
  },

  behaviors: [require('tabBehavior')],

  relations: {
    './tab-item': {
      type: 'child',
      linked(target) {
        this.data.tabs.data.push(target.data)
        this.setData({
          'tabs.data': this.data.tabs.data
        })
      },
      linkChanged(target) {},
      unlinked(target) {}
    }
  },

  data: {
    scroll: {
      x: 0
    }
  },

  ready() {
    var that = this;
    var tabsIndex = {};
      that.$fields('.__tab-nav-title__', {computedStyle: ['width']}).then(e=>{
      console.log(e)
      for (var i = 0; i < e.length; i++) {
        if (parseInt(e['.__tab-nav-title__' + i].width) > 0) {
          that.data.tabs.data[i]['isTitle'] = true
        }
      }
      that.setData({
        'tabs.data': that.data.tabs.data
      })
    })

    that.$fields('.__tab-nav__', { computedStyle: ['width']}).then(e=>{
      var width = 0
      for(var i in e){
        if (e[i].width){
          width = parseInt(e[i].width)
        }
      }
      if (that.data.scroll.x <= width / 2) {
        that.data.tabs.data.forEach(function (i, index) {
          if (i.title == that.data.active) {
            that.setData({
              'tabs.title': that.data.active || that.data.tabs.data[0].title,
              'tabs.index': index
            });
          }
        })
      }
      that.setSelectContent();
      that.onChange();
    })
  },

  created() {
    this.child = [];
  },

  methods: {
    onTabIndex(e) {
      var that = this;
      var oldselect = that.data.tabs.title;

      if (that.data.tabs.data[e.target.dataset.index].disabled) {
        return
      }
      that.setData({
        'tabs.index': e.currentTarget.dataset.index,
        'tabs.title': e.currentTarget.dataset.title
      });

      if (that.data.tabs.title == oldselect) {
        return
      }

      that.setSelectContent();
      that.onChange('tap');
      var allWidth = 0;
      var scroll = wx.getSystemInfoSync().windowWidth;
      var paddingWidth = 0;
      var myScroll = 0;
      var scrollWidth = 0;
      var paddingDiploid = wx.getSystemInfoSync().windowWidth / 1024
      wx.createSelectorQuery().in(this).select('.__tab-nav__').boundingClientRect(function(rect) {
        allWidth = rect.width
      }).exec()
      wx.createSelectorQuery().in(this).selectAll('.__tab-nav-item__').boundingClientRect(function(rect) {
        var num = 0;
        for (var i in rect) {
          num = rect[i].width + num
          if (i > that.data.tabs.index) {} else {
            that.setData({
              'scroll.x': e.currentTarget.offsetLeft / 2 - rect[i].width / 2 + 40 * paddingDiploid
            })
          }
        }
      }).exec()
    },

    onChange(onType_) {
      var that = this;
      that.triggerEvent('change', {
        index: that.data.tabs.index,
        title: that.data.tabs.title,
        type: onType_ || 'change'
      })
    },

    setSelectContent() {
      var that = this
      that.getRelationNodes('./tab-item').forEach(function(i) {
        i.onTabSelect()
      })
    },

    onScrolls(e) {
      this.setData({
        'scroll.x': e.detail.scrollLeft
      })
    },
  },
})
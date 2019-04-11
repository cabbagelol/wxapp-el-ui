const config = require("../index.js");
const tabBehavior = require('tabBehavior');

Component({
  externalClasses: [
    'el-nav',
    'el-nav-item',
    'el-content'
  ],

  options: {
    multipleSlots: true
  },

  properties: {
    active: String,
    isscroll: {
      type: Boolean,
      value: true
    },
    animation: {
      type: Boolean,
      value: false
    }
  },

  behaviors: [tabBehavior],

  relations: {
    './tab-item': {
      type: 'child',
      linked(target) {
        this.data.tabs.data.push(target.data)
        this.setData({
          'tabs.data': this.data.tabs.data
        })
      },
      linkChanged(target) { },
      unlinked(target) { }
    }
  },

  data: {
    scroll: {
      x: 0
    }
  },

  ready() {
    var that = this;
    if (config.util.in(that)) {
      config.util.$('.__tab-nav-title__').then(function(e) {
        for (var i = 0; i < e.length; i++) {
          if (e['.__tab-nav-title__' + i].width > 0) {
            that.data.tabs.data[i]['isTitle'] = true
          }
        }
        that.setData({
          'tabs.data': that.data.tabs.data
        })
      })
      config.util.$('.__tab-nav__').then(function (e) {
        if (that.data.scroll.x <= (e['.__tab-nav__'].width / 2)) {
          that.setData({
            'tabs.title': that.data.active || that.data.tabs.data[0].title,
            tabnav: e['.__tab-nav__']
          });
          that.setSelectContent();
          that.onChange();
        }
      })
    }
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
      wx.createSelectorQuery().in(this).select('.__tab-nav__').boundingClientRect(function (rect) {
        allWidth = rect.width
      }).exec()
      wx.createSelectorQuery().in(this).selectAll('.__tab-nav-item__').boundingClientRect(function (rect) {
        var allScroll = 0;
        for (var i in rect) {
          if (i > that.data.tabs.index) { } else {
            myScroll = rect[i].width + myScroll
          }
          allScroll = rect[i].width + allScroll
        }
        myScroll = myScroll + (allWidth - allScroll) / 2
        that.setData({
          'scroll.x': myScroll - scroll / 2 - rect[that.data.tabs.index].width / 2
        })
      }).exec()
    },

    onChange(onType_) {
      var that = this
      that.triggerEvent('change', {
        index: that.data.tabs.index,
        title: that.data.tabs.title,
        type: onType_ || 'change'
      })
    },

    setSelectContent() {
      var that = this
      that.getRelationNodes('./tab-item').forEach(function (i) {
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

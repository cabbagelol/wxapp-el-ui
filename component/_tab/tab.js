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
    var that = this
    wx.createSelectorQuery().in(that).select('.__tab-nav__').boundingClientRect(function(tabnav) {
      if (that.data.scroll.x <= (tabnav.width / 2)) {
        that.setData({
          'tabs.title': that.data.active || that.data.tabs.data[0].title,
          tabnav
        });
        that.setSelectContent();
        that.onChange();
      }
    }).exec()
  },

  created() {
    this.child = [];
  },

  methods: {
    onTabIndex(e) {
      var that = this;
      var oldselect = that.data.tabs.title;

      if (that.data.tabs.data[e.target.dataset.index].disabled) { return }
      that.setData({
        'tabs.index': e.currentTarget.dataset.index,
        'tabs.title': e.currentTarget.dataset.title
      });

      if (that.data.tabs.title == oldselect) { return }

      that.setSelectContent();
      that.onChange('tap');

      wx.createSelectorQuery().in(this).select('.__tab-nav-itemactive__').boundingClientRect(function(rect) {
        const systeminfo = wx.getSystemInfoSync();
        var calc = (systeminfo.screenWidth / 2) - (rect.width / 2)

        if (rect.left > 10 && rect.left < calc) {
          that.setData({
            'scroll.x': that.data.scroll.x - (rect.width / 2)
          })
        } else if (rect.left > 10 && rect.left > calc) {
          that.setData({
            'scroll.x': that.data.scroll.x + (rect.width)
          })
        }

        if (rect.right > that.data.tabnav.width / 2) {
          that.setData({
            'scroll.x': that.data.tabnav.width / 2
          })
        }

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
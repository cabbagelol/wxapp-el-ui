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
      var allWidth = 0; // 总宽度
      var scroll = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
      var paddingWidth = 0; // 父元素padding
      var myScroll = 0; // 元素所在位置
      wx.createSelectorQuery().in(this).select('.__tab-nav__').boundingClientRect(function(rect){
        // 获取父元素的总宽度
        allWidth = rect.width
      }).exec()
      wx.createSelectorQuery().in(this).selectAll('.__tab-nav-item__').boundingClientRect(function (rect) {
        // 获取子元素的所在位置
        var allScroll = 0;  // 所有元素加起来的宽度
        for(var i in rect){
          if (i > that.data.tabs.index){
          } else {
            myScroll = rect[i].width + myScroll
          }
          allScroll = rect[i].width + allScroll
        }
        // 子元素所在位置等于父元素宽度 - 所有元素加起来的宽然后除2(即父元素左padding)
        myScroll = myScroll + (allWidth - allScroll)/2 
        that.setData({
          'scroll.x': myScroll - scroll / 2 - rect[that.data.tabs.index].width/2
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
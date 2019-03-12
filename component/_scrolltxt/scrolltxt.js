Component({
  properties: {
    scrolltxt: Object,
    width: String,
    velocity: Number
  },

  ready() {
    var that = this;
    that.setData({
      scrolltxt: Object.assign({
        // 延迟滚动
        delay: 3000,
        // 滚动方向 left top button right
        orientation: 'left',
        // 移动速度
        velocity: 1
      }, that.data.scrolltxt || {})
    });
    that.onscrolltxt()
  },

  data: {
    marquee: { x: 0, y: 0, nowrap: true },
    interval: 20
  },

  methods: {
    onscrolltxt() {
      var that = this
      var maxscrollwidth = 0;
      var windowWidth = 0;
      // var windowWidth = wx.getSystemInfoSync().windowWidth;

      that.setData({
        'marquee.nowrap': (that.data.scrolltxt.orientation == 'left' || that.data.scrolltxt.orientation == 'right') ? true : false
      })

      wx.createSelectorQuery().in(this).selectAll('#marquee_cont,#marquee').boundingClientRect(function(rect) {
        for (var i of rect) {
          if (i.id == 'marquee') { windowWidth = i.width; }
          if (i.id == 'marquee_cont') { maxscrollwidth = i.width; }
        }
        switch (that.data.scrolltxt.orientation) {
          case 'right':
            if (maxscrollwidth > windowWidth) {
              that.data.marquee.x = windowWidth
              var interval = setInterval(function () {
                var crentleft = that.data.marquee.x;
                if (-crentleft < maxscrollwidth) {
                  that.setData({ 'marquee.x': crentleft - that.data.scrolltxt.velocity });
                } else {
                  that.setData({ 'marquee.x': maxscrollwidth });
                  clearInterval(interval);
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
          case 'left':
            if (maxscrollwidth > windowWidth) {
              that.data.marquee.x = -maxscrollwidth
              var interval = setInterval(function () {
                var crentleft = that.data.marquee.x;
                if (crentleft < windowWidth) {
                  that.setData({ 'marquee.x': crentleft + that.data.scrolltxt.velocity });
                } else {
                  that.setData({ 'marquee.x': -maxscrollwidth });
                  clearInterval(interval);
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
          case 'top':
            // do
            break;
          case 'button':
            // do
            break;
        }
      }).exec()
    }
  }
})
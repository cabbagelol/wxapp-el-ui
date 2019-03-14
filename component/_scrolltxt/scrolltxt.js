Component({
  properties: {
    scrolltxt: Object,
    width: String,
    velocity: Number,
    drag: Boolean
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
    windowWidth: 0,
    velocity_: 0,
    marquee: { x: 0, y: 0, nowrap: true },
    interval: 20
  },

  methods: {
    onscrolltxt() {
      var that = this
      var maxscrollwidth = 0;
      var windowWidth = 0;
      that.setData({
        'marquee.nowrap': (that.data.scrolltxt.orientation == 'left' || that.data.scrolltxt.orientation == 'right') ? true : false
      })
      wx.createSelectorQuery().in(this).selectAll('#marquee_cont,#marquee').boundingClientRect(function(rect) {
        for (var i of rect) {
          if (i.id == 'marquee') { windowWidth = i.width; }
          if (i.id == 'marquee_cont') { maxscrollwidth = i.width; }
        }
        that.setData({
          'windowWidth': windowWidth
        })
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
    },

    onStart (e) {
      if (!this.data.drag) {return}
      this.setData({
        velocity_: this.data.scrolltxt.velocity,
        tap: {
          x: e.touches[0].clientX
        },
        scrolltxt: Object.assign(this.data.scrolltxt, {
          velocity: 0
        })
      })
    },

    onMove (e) {
      if (!this.data.drag) { return }
      var calc = ((e.touches[0].clientX / 50) - (this.data.tap.x / 50))
      this.setData({
        marquee: Object.assign(this.data.marquee, {
          x: this.data.marquee.x + calc,
          y: 0
        })
      })
    },

    onEnd () {
      if (!this.data.drag) { return }
      this.setData({
        scrolltxt: Object.assign(this.data.scrolltxt, {
          velocity: this.data.velocity_ <= 0 ? 1 : this.data.velocity_
        })
      })
    }
  }
})
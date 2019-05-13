import Elui from '../baseComponent';
Elui({
  properties: {
    isscroll: {
      type: Boolean,
      value: true
    },
    scrolltxt: {
      type: Object,
      value: {}
    },
    width: {
      type: String,
      value: ''
    },
    velocity: {
      type: Number,
      value: 0
    },
    drag: {
      type: Boolean,
      value: true
    }
  },

  observers: {
    'isscroll': function(e) {
      if (e) {
        this.onscrolltxt(e);
        this.setData({
          omittxt: e
        })
      }
    }
  },

  data: {
    omittxt: false
  },

  ready() {
    var that = this;
    console.log(that)
    that.setData({
      scrolltxt: Object.assign({
        delay: 3000,
        orientation: 'left', // left top button right
        velocity: 1
      }, that.data.scrolltxt || {})
    });
    that.onscrolltxt();
  },

  data: {
    velocity_: 0,
    marquee: {
      x: 0,
      y: 0,
      nowrap: true
    },
    interval: 20
  },

  methods: {
    onscrolltxt(isscroll_) {
      var that = this;
      var interval;
      var maxscrollWidth = 0;
      var windowWidth = 0;
      var info = wx.getSystemInfoSync();
      that.$fields('.marquee,.marqueecont', {
        computedStyle: ['width']
      }).then(rect => {
        if (!rect.length) {
          return;
        }
        windowWidth = parseInt(rect['.marquee'].width)  ;
        maxscrollWidth = parseInt(rect['.marqueecont'].width);
        that.setData({
          omittxt: maxscrollWidth < windowWidth ? true : false,
          'windowWidth': windowWidth,
          'marquee.nowrap': (that.data.scrolltxt.orientation == 'left' || that.data.scrolltxt.orientation == 'right') ? true : false
        })
        if (!that.data.isscroll) {
          that.setData({
            'marquee.x': 0,
            omittxt: that.data.isscroll ? false : true
          })
          return;
        }
        switch (that.data.scrolltxt.orientation) {
          case 'right':
            if (maxscrollWidth > windowWidth) {
              that.data.marquee.x = windowWidth;
              interval = setInterval(function () {
                var crentleft = that.data.marquee.x;
                if (-crentleft < maxscrollWidth) {
                  that.setData({
                    'marquee.x': crentleft - that.data.scrolltxt.velocity
                  });
                } else {
                  that.setData({
                    'marquee.x': maxscrollWidth
                  });
                  clearInterval(interval);
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
          case 'left':
            if (maxscrollWidth > windowWidth) {
              that.data.marquee.x = -maxscrollWidth;
              interval = setInterval(() => {
                var crentleft = that.data.marquee.x;
                if (crentleft < windowWidth) {
                  that.setData({
                    'marquee.x': crentleft + that.data.scrolltxt.velocity
                  });
                } else {
                  that.setData({
                    'marquee.x': -maxscrollWidth
                  });
                  clearInterval(interval)
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
        }
      })
      return;
      that._dom('#marquee,#marquee_cont').then(function(rect) {
        if (!rect.length) {
          return;
        }
        windowWidth = rect['#marquee_cont'].width;
        maxscrollWidth = rect['#marquee'].width;
        that.setData({
          omittxt: maxscrollWidth < windowWidth ? true : false,
          'windowWidth': windowWidth,
          'marquee.nowrap': (that.data.scrolltxt.orientation == 'left' || that.data.scrolltxt.orientation == 'right') ? true : false
        })
        if (!that.data.isscroll) {
          that.setData({
            'marquee.x': 0,
            omittxt: that.data.isscroll ? false : true
          })
          return;
        }
        switch (that.data.scrolltxt.orientation) {
          case 'right':
            if (maxscrollWidth > windowWidth) {
              that.data.marquee.x = windowWidth;
              interval = setInterval(function() {
                var crentleft = that.data.marquee.x;
                if (-crentleft < maxscrollWidth) {
                  that.setData({
                    'marquee.x': crentleft - that.data.scrolltxt.velocity
                  });
                } else {
                  that.setData({
                    'marquee.x': maxscrollWidth
                  });
                  clearInterval(interval);
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
          case 'left':
            if (maxscrollWidth > windowWidth) {
              that.data.marquee.x = -maxscrollWidth;
              interval = setInterval(() => {
                var crentleft = that.data.marquee.x;
                if (crentleft < windowWidth) {
                  that.setData({
                    'marquee.x': crentleft + that.data.scrolltxt.velocity
                  });
                } else {
                  that.setData({
                    'marquee.x': -maxscrollWidth
                  });
                  clearInterval(interval)
                  that.onscrolltxt();
                }
              }, that.data.interval);
            }
            break;
        }
      })
    },

    onScrolltxtStart(e) {
      var that = this;
      var point = e.touches[0];
      if (!that.data.drag) {
        return
      }
      that.setData({
        'tap.start': point.pageY,
        'tap.end': that.data.marquee.x,
        velocity_: that.data.scrolltxt.velocity,
        scrolltxt: Object.assign(that.data.scrolltxt, {
          velocity: 0
        })
      })
    },

    onScrolltxtMove(e) {
      var that = this;
      var point = e.touches[0];
      if (!this.data.drag || !this.data.isscroll) {
        return;
      }
      this.setData({
        marquee: Object.assign(this.data.marquee, {
          x: point.pageX - this.data.tap.start + this.data.tap.end,
          y: 0
        })
      })
    },

    onScrolltxtEnd(e) {
      var that = this;
      var point = e.changedTouches[0];
      if (!this.data.drag) {
        return
      }
      this.setData({
        scrolltxt: Object.assign(this.data.scrolltxt, {
          velocity: this.data.velocity_ <= 0 ? 1 : this.data.velocity_
        }),
        'tap.end': point.pageX
      })
    }
  }
})
import Elui from '../baseComponent';
Elui({
  options: {
    multipleSlots: true
  },

  data: {
    message: {},
    content: {
      head: {
        height: 0
      },
      body: {
        height: 0,
        view: {
          height: 0
        }
      },
      footer: {
        height: 0
      }
    }
  },

  lifetimes: {
    attached() {
      var that = this;
      setTimeout(() => {
        that.getDom();
      }, 100)
    }
  },

  methods: {
    getDom() {
      var that = this;
      var info = wx.getSystemInfoSync();
      that.$fields('.body,.head,.footer', {
        computedStyle: ['height']
      }).then(res => {
        that.setData({
          'content.head.height': parseInt(res['.head'].height),
          'content.body.height': info.screenHeight - parseInt(res['.head'].height) - parseInt(res['.footer'].height),
          'content.footer.height': parseInt(res['.footer'].height),
          message: that.selectComponent(".messgae")
        })
        that.srcollHead = -(that.data.content.body.view.height - that.data.content.body.height);
        that.triggerEvent('ready', {
          body: {
            head: that.data.content.head.height,
            body: that.data.content.body.height,
            footer: that.data.content.footer.height,
            scrollButtonY: that.srcollHead
          }
        })
      })
    },
  },
})
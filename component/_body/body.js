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

  ready () {
    if (!this._head) {
      this.getDom();
    }
  },

  relations: {
    '../_head/head': {
      type: 'child',
      linked(parent) {
        this._head = parent;
      }
    }
  },

  methods: {
    getDom(isBar_) {
      var that = this;
      var info = wx.getSystemInfoSync();
      const isbar = (!!isBar_ ? info.statusBarHeight : 0);
      that.$fields('.body,.head,.footer', {
        computedStyle: ['height']
      }).then(res => {
        that.setData({
          'content.head.height': parseFloat(res['.head'].height) + isbar,
          'content.body.height': info.screenHeight - parseFloat(res['.head'].height) - parseFloat(res['.footer'].height) - isbar,
          'content.footer.height': parseFloat(res['.footer'].height),
          'message': that.selectComponent(".messgae") // 0.0.6版本移除
        })
        that.srcollHead = -(that.data.content.body.view.height - that.data.content.body.height);
        that.message = that.selectComponent(".messgae"); // 0.0.6使用过渡
        that.triggerEvent('ready', {
          body: {
            head: that.data.content.head.height ,
            body: that.data.content.body.height,
            footer: that.data.content.footer.height,
            scrollButtonY: that.srcollHead
          }
        })
      })
    },
  },
})
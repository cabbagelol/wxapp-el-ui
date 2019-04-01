const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },  

  properties: {
  },

  data: {
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

  ready() {
    var that = this;
    var info = wx.getSystemInfoSync();
    if (config.util.in(that)) {
      config.util.$('.__content-head__').then(function(e) {
        that.setData({
          'content.head.height': e['.__content-head__'].height
        })
      })
      config.util.$('.__content-footer__').then(function(e) {
        that.setData({
          'content.footer.height': e['.__content-footer__'].height
        })
      })
      config.util.$('.__content-body__').then(function(e) {
        const height = info.screenHeight - that.data.content.head.height - that.data.content.footer.height;
        that.setData({ 'content.body.height': height })
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
    }
  }
})
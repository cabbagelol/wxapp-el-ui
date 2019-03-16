const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  data: {
      content: {
        head: {
          height: null
        },
        body: {
          height: null
        },
        footer: {
          height: null
        }
      }
  },

  ready () {
    var that = this;
    var info = wx.getSystemInfoSync();
    if (config.util.in(this)) {
      config.util.$('.__content-head__').then(function (e) {that.setData({ 'content.head.height': e.height })})
      config.util.$('.__content-footer__').then(function (e) {that.setData({ 'content.footer.height': e.height}) })
      config.util.$('.__content-body__').then(function (e) {
        that.setData({
          'content.body.height': info.screenHeight - that.data.content.head.height - that.data.content.footer.height
        })
      })
    } 
  }
})

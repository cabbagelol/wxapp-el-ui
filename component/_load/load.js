const config = require("../index.js");

Component({
  properties: {
    size: String,
    type: String
  },

  ready() {
    var that = this
    if (config.util.in(that)) {
      config.util.$('#load').then(function(e) {
        var load = e['#load'];
        if (!that.data.size) {
          that.setData({
            size: ((load.width || 1) * (load.height || 1)) / 1000
          })
        }
      })
    }
  },
})
const config = require("../index.js");

Component({
  properties: {
    src: String,
    style: String,
    mode: String,
    placeholder: String,
    lazyload: Boolean,
    arialabel: String
  },

  data: { 
    load: true
  },

  methods: {
    onError(e) {
      this.setData({
        src: '',
        load: false
      })
    },

    onLoad(e) {
      var that = this;
      if (config.util.in(that)) {
        config.util.$([".__img__", ".__img-item__"]).then(function(e) {
          // 检查容器
          console.log(e)
          if (e['.__img__'].width == 0 || e['.__img__'].height == 0) {
            that.setData({
              style: (that.data.style || "") + ';width:' + 50 + 'px;height:' + 50 + 'px'
            })
            // console.log(that.data.style)
          }
        })
      }
      that.setData({
        load: false
      })
    }
  }
})
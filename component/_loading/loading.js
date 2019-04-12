const config = require("../index.js");

Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    maskbackground: {
      type: String,
      value: 'rgba(0, 0, 0, .8)'
    },
    type: {
      type: String,
      value: 'main'
    },
    color: {
      type: Object,
      value: {
        essential: '',
        deputy: ''
      }
    },
    size: {
      type: Number,
      value: 1
    }
  },

  data: {
    floated: false,
    loadindW: 0
  },

  ready () {
    var that = this;
    if (config.util.in(that)) {
      config.util.$('.__loading-slot__,.__loading-z-index__').then(function (e) {
        if (e['.__loading-slot__'].width != 0) {
          that.setData({
            floated: true,
            loadindW: e['.__loading-z-index__'].width
          })
        }
      })
    }
  },

  methods: {

  },
})

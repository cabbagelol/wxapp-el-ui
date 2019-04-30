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
})
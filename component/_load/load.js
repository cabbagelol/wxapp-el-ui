import Elui from '../baseComponent';
const config = require("../index.js");
Elui({
  properties: {
    color: {
      type: Object,
      value: {
        essential: '',
        deputy: 'rgba(0, 0, 0, 0.06)'
      }
    },
    size: {
      type: String,
      value: 1
    },
    type: String
  },
})
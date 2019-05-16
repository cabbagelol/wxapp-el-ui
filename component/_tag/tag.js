import Elui from '../baseComponent';
Elui({
  properties: {
    color: String,
    size: String,
    plain: {
      type: Boolean,
      value: false
    },
    round: Boolean,
    textColor: String,
    value: {
      type: String,
      value: ''
    }
  },
})
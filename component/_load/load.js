import Elui from '../baseComponent';
Elui({
  properties: {
    essential: {
      type: String,
      value: ''
    },
    deputy: {
      type: String,
      value: 'rgba(0, 0, 0, 0.06)'
    },
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
import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-tag',
    'el-slot'
  ],

  properties: {
    color: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: '5'
    },
    plain: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    textColor: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    close: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onClose(e) {
      this.triggerEvent('close', {
        el: e
      }, { bubbles: true, composed: true })
    }
  }
})
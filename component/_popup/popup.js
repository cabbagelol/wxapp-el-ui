import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-content'
  ],

  options: {
    multipleSlots: true
  },

  properties: {
    background: {
      type: String,
      value: ''
    },
    position: {
      type: String,
      value: 'center'
    },
    modal: {
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: false
    },
    closeOnModal: Boolean,
    animation: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onModal(e) {
      var that = this;
      that.setData({ 'show': that.data.show != true })
      that.triggerEvent('change', {
        value: that.data.show,
        el: e
      })
    }
  }
})
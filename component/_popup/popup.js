Component({
  options: {
    multipleSlots: true
  },

  properties: {
    background: {
      type: String,
      value: ''
    },
    position: String,
    modal: Boolean,
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
Component({
  options: {
    multipleSlots: true
  },

  properties: {
    position: String,
    modal: Boolean,
    show: {
      type: Boolean,
      value: false
    },
    closeOnModal: Boolean
  },

  methods: {
    onModal(e) {
      var that = this
      that.setData({ 'show': that.data.show != true })
      if (closeOnModal) {
        that.triggerEvent('change', { 
          value: that.data.show,
          el: e
        })
      }
    }
  } 
})
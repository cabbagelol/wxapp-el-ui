Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    }
  },

  relations: {
    '../_radio-group/radio-group': {
      type: 'parent'
    }
  },

  data: {
  },

  methods: {
    setValue(checked_) {
      this.setData({
        checked: typeof checked_ === 'boolean' ? checked_ : false || this.data.checked != true
      })
    }
  }
})
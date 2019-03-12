Component({
  properties: {
      title: String,
      placeholder: String,
      value: String,
      mustchoose: Boolean,
      type: String
  },

  data: {},

  methods: {
      onInput (e) {
        this.triggerEvent('input', e)
      }
  }
})

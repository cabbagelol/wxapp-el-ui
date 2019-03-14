Component({
  properties: {
      title: String,
      placeholder: String,
      value: String,
      mustchoose: Boolean,
      type: String
  },

  relations: {
    './_input-title': {
      type: 'child', 
      linked(target) {
      },
      linkChanged(target) {
      },
      unlinked(target) {
      }
    }
  },

  data: {},

  methods: {
      onInput (e) {
        this.triggerEvent('input', e)
      }
  }
})

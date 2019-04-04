Component({
  options: {
    multipleSlots: true
  },

  properties: {
    title: String,
    placeholder: String,
    value: String,
    clear: Boolean,
    mustchoose: Boolean,
    type: String
  },

  relations: {
    './_input-title': {
      type: 'child',
      linked(target) {},
      linkChanged(target) {},
      unlinked(target) {}
    }
  },

  data: {
    length: 0
  },

  methods: {
    onInput(e) {
      this.setData({
        length: String(e.detail.value).length
      })
      this.triggerEvent('input', {
        e: e,
        value: e.detail.value || ''
      })
    },

    onClearValue(e) {
      this.onInput(e);
      this.setData({
        value: '',
        length: 0
      })
    },
  }
})
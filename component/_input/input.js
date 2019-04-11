Component({
  options: {
    multipleSlots: true
  },

  properties: {
    vibrate: {
      type: Boolean,
      value: false
    },
    title: String,
    placeholder: String,
    value: String,
    clear: Boolean,
    mustchoose: Boolean,
    type: String,
    focus: {
      type: Boolean,
      value: false
    },
    maxlength: Number,
    name: String,
    disabled: {
      type: Boolean,
      value: false
    }
  },

  relations: {
    './_input-title': {
      type: 'child' 
    },
    '../_form/form': {
      type: 'parent'
    }
  },

  data: {
    value: '',
    length: 0
  },

  methods: {
    onInput(e) {
      this.setData({
        length: String(e.detail.value).length,
        value: e.detail.value || ''
      })
      this.triggerEvent('input', {
        e: e,
        value: e.detail.value || ''
      })
      if (this.data.vibrate) {
        wx.vibrateShort();
      }
    },

    onClearValue(e) {
      this.onInput(e);
      this.setData({
        value: '',
        length: 0
      })
    },

    onEmpty () {
      this.setData({
        value: '',
        length: 0
      })
    }
  }
})
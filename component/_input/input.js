import Elui from '../baseComponent';
Elui({
  options: {
    multipleSlots: true
  },

  properties: {
    vibrate: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value:''
    },
    clear: {
      type: Boolean,
      value: false
    },
    mustchoose: {
      type: Boolean,
      value: false
    },
    type: String,
    focus: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: 140
    },
    name: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    Internalstyle: {
      type: Boolean,
      value: false
    },
  },

  relations: {
    './_input-title': {
      type: 'child' 
    },
    '../_form/form': {
      type: 'parent'
    },
    '../_focus/focus': {
      type: 'parent'
    },
  },

  data: {
    value: '',
    length: 0
  },

  ready () {
    var that = this;
    that.setData({
      length: that.data.value.length,
      clear: that.data.value.length >= 0 ? true : false
    })
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
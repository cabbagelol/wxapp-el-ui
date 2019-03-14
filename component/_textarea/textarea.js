Component({
  properties: {
      elclass: String,
      elstyle: String,
      title: String,
      data: String,
      placeholder: String,
      style: Object,
      register: String,
      wordcount: Number
  },

  data: {
      placeholder: '输入内容',
      value: '',
      cursor: 0
  },

  methods: {
    onInput (e) {
        this.setData({
            value: e.detail.value,
            cursor: e.detail.cursor
        })
        this.triggerEvent('input', e)
    }
  }
})

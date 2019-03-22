Component({
  externalClasses: [
    'el-textarea',
    'el-title',
    'el-wordcount'
  ],

  properties: {
    textarea: {
      type: Object,
      value: {
        style: {
          height: 130,
          minHeight: 0,
          maxHeight: null
        }
      }
    },
    title: String,
    value: String,
    placeholder: String,
    wordcount: Number,
    name: String,
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {
    placeholder: '输入内容',
    value: '',
    cursor: 0
  },

  methods: {
    onInput(e) {
      var that = this
      that.setData({
        value: e.detail.value,
        cursor: e.detail.cursor
      })
      that.triggerEvent('input', {
        type: e.type,
        value: that.data.value,
        e: e
      })
    }
  }
})
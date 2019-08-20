import Elui from '../baseComponent';
Elui({
  properties: {

  },

  data: {
    value: '233',
    emoji: {
      show: false,
      modal: true,
      focus: false
    }
  },

  methods: {
    onSetValue () {
      this.setData({
        'emoji.focus': true
      })
    },

    openEmoji () {
      this.setData({
        'emoji.show': this.data.emoji.show != true
      })
    },

    onInput (e) {
      this.setData({
        value: e.detail.value
      })
    }
  }
})

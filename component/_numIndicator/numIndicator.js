const config = require("../index.js");

Component({
  externalClasses: [
    'el-button-left',
    'el-button-right',
    'el-input'
  ],

  options: {
    addGlobalClass: true
  },

  properties: {
    index: Number,
    value: Number,
    min: Number,
    max: Number,
    superposition: Number,
    longtag: Boolean
  },

  data: {
    value: 0,
    setTime: () => {}
  },

  ready() {
    var that = this
    if (!that.data.value) {
      that.setData({
        value: that.data.min
      })
    }
  },

  methods: {
    settriggerEvent(e) {
      var that = this;
      var calcValue = that.data.value;
      if (that.data.min && calcValue <= that.data.min) {
        calcValue = that.data.min
      } else if (that.data.max && calcValue >= that.data.max) {
        calcValue = that.data.max
      }
      that.triggerEvent('change', {
        el: e,
        index: that.data.index,
        value: calcValue
      })
      that.setData({ value: calcValue })
    },

    onInput(e) {
      var InputWidth = 0;
      var Value = e.detail.value;
      this.setData({
        value: e.detail.value,
        inputWidth: Value.toString().length * 20
      })
      this.settriggerEvent(e)
    },

    onStop () {
      clearInterval(that.data.setTime)
    },

    onTapStart (e) {
      var that = this
      if (!that.data.longtag) {return}
      that.setData({
        setTime: setInterval(function () {
          that.onChange(e)
          that.triggerEvent('holdtap', {
            el: e,
            value: that.data.value
          })
        }, 100)
      })
    },

    onTapEnd (e) {
      var that = this
      if (!that.data.longtag) { return }
      clearInterval(that.data.setTime)
      that.triggerEvent('tapend', {
        el: e,
        value: that.data.value
      })
    },

    onChange(e) {
      var that = this
      switch (e.target.dataset.type) {
        case 'reduce':
          if (that.data.min ? that.data.value > that.data.min : true ) {
            that.setData({
              value: that.data.value -= Number(that.data.superposition.toFixed(2)) || 1
            })
          }
          break
        case 'add':
          if (that.data.value < that.data.max || !that.data.max) {
            that.setData({
              value: that.data.value += that.data.superposition || 1
            })
          }
          break
      }
      that.setData({
        inputWidth: that.data.value.toString().length * 20
      })
      that.settriggerEvent(e)
    }
  }
})
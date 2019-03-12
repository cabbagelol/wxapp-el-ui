Component({
    properties: {
        index: Number,
        value: Number,
        min: Number,
        max: Number
    },

    data: {},

    methods: {
        settriggerEvent (e) {
            var that = this
            that.triggerEvent('change', {
                el: e,
                index: that.data.index,
                value: (function () {
                  var val = that.data.value
                  if (that.data.min && val <= that.data.min) {
                    val = that.data.min
                  }
                  else if (that.data.max && val >= that.data.max) {
                    val = that.data.max
                  }
                  return val
                })()
            })
        },

        onInput (e) {
          this.setData({
            value: e.detail.value
          })
          this.settriggerEvent(e)
        },

        onChange(e) {
            var that = this
            switch (e.target.dataset.type) {
                case 'reduce':
                    if (that.data.value > that.data.min) {
                        that.setData({
                            value: that.data.value -= 1
                        })
                    }
                    break
                case 'add':
                    if (that.data.value >= that.data.max) {
                        that.setData({
                            value: that.data.value += 1
                        })
                    }
                    break
            }
            that.settriggerEvent(e)
        }
    }
})

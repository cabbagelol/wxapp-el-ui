Component({
  properties: {

  },

  relations: {
    '../_input/input': {
      type: 'child',
      linked(target) {
        var that = this;
        var data = that.data.form.data;
        data.push(target)
        that.setData({
          'form.data': data
        })
      }
    },
    '../_textarea/textarea': {
      type: 'child',
      linked(target) {
        var that = this;
        var data = that.data.form.data;
        data.push(target)
        that.setData({
          'form.data': data
        })
      }
    },
    '../_button/button': {
      type: 'child'
    }
  },

  data: {
    form: {
      data: []
    }
  },

  methods: {
    onFormSubmit(e) {
      var that = this;
      var data = {}
      that.data.form.data.forEach(function(i, index) {
        data[i.data.name || index] = i.data.value
      })
      this.triggerEvent('submit', {
        value: data
      });
    },

    onFormReset() {
      var that = this;
      that.data.form.data.forEach(function(i, index) {
        i.onEmpty();
      })
      this.triggerEvent('reset');
    },
  }
})
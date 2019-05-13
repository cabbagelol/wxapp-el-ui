import Elui from '../baseComponent';
Elui({
  relations: {
    '../_focus/focus': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_input/input': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_textarea/textarea': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_radio-group/radio-group': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_checkbox-group/checkbox-group': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_address/address': {
      type: 'child',
      linked(target) {
        this.setValue(target)
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
    setValue(target) {
      var that = this;
      var data = that.data.form.data;
      data.push(target)
      that.setData({
        'form.data': data
      })
    },

    onFormSubmit(e) {
      var that = this;
      var data = {};
      var verify = 0;
      that.data.form.data.forEach(function(i, index) {
        if (typeof i.onVerify == 'function') {
          i.onVerify();
        }
        if (i.data.verify) {
          verify = i.data.verify++;
        }
        data[i.data.name || index] = i.data.value;
      })
      this.triggerEvent('submit', {
        verify: verify > 0 ? true : false,
        value: data
      });
    },

    onFormReset() {
      var that = this;
      that.data.form.data.forEach(function(i, index) {
        if (typeof i.onEmpty == 'function') {
          i.onEmpty();
        }
        if (typeof i.onVerify == 'function') {
          i.onVerify();
        }
      })
      this.triggerEvent('reset');
    },
  }
})
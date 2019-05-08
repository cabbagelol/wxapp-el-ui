import Elui from '../baseComponent';
Elui({
  properties: {
    name: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    ischeckbox: {
      type: Boolean,
      value: true
    }
  },

  relations: {
    '../_checkbox-group/checkbox-group': {
      type: 'parent',
      linked(target) {
        this.parent_ = target;
      }
    },
  },

  methods: {
    getValue() {
      return this.data.checked;
    },

    setValueChecked() {
      var that = this;
      if (that.data.disabled) {
        return
      }
      that.setData({
        checked: that.data.checked != true
      })
      if (that.parent_ && typeof this.parent_.onRadioGroup == 'function') {
        that.parent_.onRadioGroup();
      }
    },

    setValue(checked_) {
      var that = this;
      that.setData({
        checked: typeof checked_ === 'boolean' ? checked_ : false
      })
    }
  }
})
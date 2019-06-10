import Elui from '../baseComponent';
Elui({
  properties: {
    name: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    },
    '../_radio/radio': {
      type: 'child'
    }
  },

  observers: {
    'value': function (e) {
      console.log(e)
      // this.onReady();
    }
  },

  data: {
    group: [],
    group_: [],
    data: [],
    value: ''
  },

  methods: {
    onPull(target) {
      let group = this.data.group;
      if (target.data.value) {
        group.push(target);
        this.setData({
          group
        })
        this.onReady();
      }
    },

    onReady() {
      var that = this;
      if (that.data.group.length <= 0) {
        return
      }!that.data.value ? that.onRadioGroup({
        data: {
          name: that.data.group[0].data.name,
          value: that.data.group[0].data.value
        }
      }, true) : that.data.group.forEach(function(i, index) {
        if (that.data.value == i.data.value) {
          that.onRadioGroup({
            data: {
              name: i.data.name,
              value: i.data.value
            }
          }, true)
        }
      })
    },

    onChange(data_) {
      this.triggerEvent("change", Object.assign({
        type: 'radio-group',
        value: this.data.value,
        data: this.data.group_
      }, data_))
    },

    onRadioGroup(data_, change_) {
      var that = this;
      var value;
      that.data.group_ = [];
      that.data.group.forEach(function(i, index) {
        if (i.setValue && typeof i.setValue == 'function') {
          i.setValue(false);
          if (!!data_ && data_.data.value == i.data.value) {
            console.log(i, data_)
            i.setValue(true);
          }
          that.data.group_.push({
            checked: i.getValue(),
            value: i.data.value,
            name: i.data.name
          });
        }
      })
      that.data.group_.forEach(function(i) {
        if (i.checked) {
          that.data.data = {
            value: i.value,
            name: i.name
          };
          that.data.value = i.value;
        }
      })
      if (change_) {
        that.onChange();
      }
    }
  }
})
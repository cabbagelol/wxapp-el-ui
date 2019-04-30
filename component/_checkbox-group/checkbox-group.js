Component({
  properties: {
    name: {
      type: String,
      value: ''
    },
    value: {
      type: Array,
      value: []
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    },
    '../_checkbox/checkbox': {
      type: 'child',
      linked(target) {
        let group = this.data.group;
        if (target.data.value) {
          group.push(target);
          this.setData({
            group
          })
        }
      }
    }
  },

  data: {
    group: [],
    group_: [],
    value: []
  },

  ready() {
    var that = this;
    that.data.value ? that.data.group.forEach(function (i, index) {
      that.data.value.forEach(function (j) {
        if (i.data.value == j) {
          i.setValue(true);
        }
      })
    }) : null;
  },

  methods: {
    onChange(data_) {
      this.triggerEvent("change", Object.assign({
        type: 'checkbox-group',
        value: this.data.value,
        data: this.data.group_
      }, data_))
    },

    onRadioGroup(data_) {
      var that = this;
      var value;
      that.data.value = [];
      that.data.group_ = [];
      that.data.group.forEach(function(i, index) {
        that.data.group_.push(i.data);
        if (i.data.checked) {
          that.data.value.push(i.data.value);
        }
      })
      that.onChange();
    }
  }
})
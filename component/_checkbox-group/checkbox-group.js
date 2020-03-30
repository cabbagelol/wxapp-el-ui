import Elui from '../baseComponent';
Elui({
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
      type: 'child'
    }
  },

  data: {
    group: [],
    group_: [],
    value: []
  },

  ready() {
    var that = this;

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
      }
      that.data.value ? that.data.group.forEach(function (i, index) {
        that.data.value.forEach(function (j) {
          if (i.data.value == j) {
            i.setValue(true);
          }
        })
      }) : null;
    },

    onChange(data_) {
      var list = [];

      this.data.group_.forEach(i => {
        if (i.checked) {
          list.push(i);
        }
      });

      this.triggerEvent("change", Object.assign({
        type: 'checkbox-group',
        value: this.data.value,
        data: list,
      }, data_))
    },

    onRadioGroup(data_) {
      var that = this;
      var value;
      that.data.value = [];
      that.data.group_ = [];
      that.data.group.forEach(function (i, index) {
        that.data.group_.push(i.data);
        if (i.data.checked) {
          that.data.value.push(i.data.value);
        }
      })
      that.onChange();
    }
  }
})
import Elui from '../baseComponent';
Elui({
  properties: {
    value: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请选择'
    }
  },

  data: {
    value: '',
    citysIndex: ['', '', '']
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    }
  },

  methods: {
    getCitys(e) {
      var that = this;
      return {
        postcode: e.postcode,
        code: e.code,
        province: e.value[0],
        city: e.value[1],
        area: e.value[2],
      }
    },

    onCitysChange(e) {
      var that = this;
      const value = that.getCitys(e.detail).province + that.getCitys(e.detail).city + that.getCitys(e.detail).area;
      that.setData({ value });
      that.triggerEvent('tapchange', {
        province: that.getCitys(e.detail).province,
        city: that.getCitys(e.detail).city,
        area: that.getCitys(e.detail).area,
        value
      })
    },

    onCancel(e) {
      this.triggerEvent('cancel')
    },
  }
})
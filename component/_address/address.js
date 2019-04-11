var arrays;

Component({
  properties: {
    placeholder: {
      type: String,
      value: '请选择'
    }
  },

  data: {
    citysIndex: [0, 0, 0]
  },

  ready() {
    var that = this;
    arrays = require('./js/cityArray').getAreaInfo();
    var cityArray = [
      [],
      [],
      []
    ];
    for (let i = 0, len = arrays.length; i < len; i++) {
      switch (arrays[i]['level']) {
        case 1:
          cityArray[0].push(arrays[i]["name"]);
          break;
        case 2:
          if (arrays[i]['sheng'] == arrays[0]['sheng']) {
            cityArray[1].push(arrays[i]["name"]);
          }
          break;
        case 3:
          if (arrays[i]['sheng'] == arrays[0]['sheng'] && arrays[i]['di'] == arrays[1]['di']) {
            cityArray[2].push(arrays[i]["name"]);
          }
          break;
      }
    }
    that.setData({
      cityArray: cityArray
    });
  },

  methods: {
    changeCitysChange: function(e) {
      var that = this;
      var cityArray = that.data.cityArray;
      var address = '';
      if (that.data.ssq == undefined) {
        var citysIndex = that.data.citysIndex;
        for (let i in citysIndex) {
          address += cityArray[i][citysIndex[i]]
        }
      } else {
        address = that.data.ssq;
      }
      that.setData({
        value: address
      })
      that.triggerEvent('change', {
        value: String(address),
        citysIndex: that.data.citysIndex,
        province: that.data.cityArray[0][that.data.citysIndex[0]],
        city: that.data.cityArray[1][that.data.citysIndex[1]],
        area: that.data.cityArray[2][that.data.citysIndex[2]]
      })
    },

    changeCitysChangeColumn: function(e) {
      var that = this;
      var cityArray = that.data.cityArray;
      var list1 = [];
      var list2 = [];
      var citysIndex = [];
      switch (e.detail.column) {
        case 0:
          for (let i = 0, len = arrays.length; i < len; i++) {
            if (arrays[i]['name'] == cityArray[0][e.detail.value]) {
              var sheng = arrays[i]['sheng'];
            }
            if (arrays[i]['sheng'] == sheng && arrays[i]['level'] == 2) {
              list1.push(arrays[i]['name']);
            }
            if (arrays[i]['sheng'] == sheng && arrays[i]['level'] == 3 && arrays[i]['di'] == arrays[1]['di']) {
              list2.push(arrays[i]['name']);
            }
          }
          citysIndex = [e.detail.value, 0, 0];
          var ssq = cityArray[0][e.detail.value] + list1[0] + (list2[0] || '');
          that.setData({
            global_sheng: sheng
          });
          break;
        case 1:
          var di;
          var sheng = that.data.global_sheng;
          list1 = cityArray[1];
          for (let i = 0, len = arrays.length; i < len; i++) {
            if (arrays[i]['name'] == cityArray[0][e.detail.value]) {
              sheng = arrays[i]['sheng'];
            }
            if (arrays[i]['name'] == cityArray[1][e.detail.value]) {
              di = arrays[i]['di'];
            }
            if (arrays[i]['sheng'] == sheng && arrays[i]['level'] == 3 && arrays[i]['di'] == di) {
              list2.push(arrays[i]['name']);
            }
          }
          citysIndex = [that.data.citysIndex[0], e.detail.value, 0];
          var ssq = cityArray[0][that.data.citysIndex[0]] + list1[e.detail.value] + (list2[0] || '');
          break;
        case 2:
          list1 = cityArray[1];
          list2 = cityArray[2];
          citysIndex = [that.data.citysIndex[0], that.data.citysIndex[1], e.detail.value];
          var ssq = cityArray[0][that.data.citysIndex[0]] + list1[that.data.citysIndex[1]] + (list2[e.detail.value] || '');
          break;
      }
      that.setData({
        "cityArray[1]": list1,
        "cityArray[2]": list2,
        citysIndex: citysIndex,
        ssq: ssq,
      });
      that.triggerEvent('tapchange', {
        citysIndex: citysIndex,
        value: ssq
      })
    },
  }
})
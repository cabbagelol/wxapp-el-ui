import Elui from '../baseComponent';
const config = require("../index.js");
Elui({
  properties: {
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 5
    }
  },

  data: {
    slider: {
      max: [],
      value: 0,
      left: 0,
      endX: 0,
      startX: 0,
      height: 0
    }
  },

  ready () {
    var that = this;
    if (config.util.in(that)) {
      config.util.$('.__slider-button__,.__slider-line__').then(function (e) {
        var max = [];
        var valuemax = (e['.__slider-line__'].width - e['.__slider-line__'].height) / that.data.max;
        that.interval = valuemax
        that.interval_ = that.interval;

        console.log(valuemax)
        for (var i = 0 ; i < that.data.max; i++) {
          max.push(that.interval * i)
        }
        console.log(max)
        that.setData({
          'slider.height': e['.__slider-button__'].height,
          'slider.lineH': e['.__slider-line__'].height,
          'slider.lineW': e['.__slider-line__'].width,
          'slider.max': max
        })
      })
    }
  },

  methods: {
    onSliderStart (e) {
      var that = this;
      var p = e.changedTouches["0"];

      that.setData({
        'slider.endX': p.clientX,
        'slider.startX': p.clientX,
      })
    },

    onSliderEnd (e) {
      var that = this;
      var p = e.changedTouches[0];

      that.setData({
        'slider.endX': p.clientX
      })
    },

    onSliderMove (e) {
      var that = this;
      var p = e.changedTouches[0];
      var calcX = p.clientX - that.data.slider.startX + that.data.slider.endX - that.data.slider.height

      if (calcX < 0 || calcX > that.data.slider.lineW - that.data.slider.height) {return}
 
      if (that.data.max > 0 && calcX >= that.interval_) {
        that.setData({
          'slider.value': that.data.slider.value + 1
        })
        that.interval_ = that.data.slider.max[that.data.slider.value]
      }
      if (calcX >= that.interval * that.data.max) {
        calcX = that.interval * that.data.max
        that.interval_ = calcX
      }

      that.setData({
        'slider.left': calcX
      })
    }
  }
})
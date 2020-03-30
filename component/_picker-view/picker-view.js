import Elui from '../baseComponent';
const config = require("../index.js");

Elui({
  properties: {
    data: {
      type: Array,
      value: [],
    },
    visibleItemCount: {
      type: Number,
      value: 3,
    },
    itemHeight: {
      type: Number,
      value: 36,
    },
  },

  data: {
    slots: [],
    slotsindex: [],
    configure: {
      // 实体高度
      height: 0,
    },
    rolling: {
      isscroll: true,
      scrollbar: false,
      scrollButtonY: 0,
      upperThreshold: 100,
      lowerThreshold: 100,
      autoFullscreenf: true,
      rubber: true,
    }
  },

  ready() {
    const that = this;

    that.data.data.forEach(i => {
      i.y = 0;
    });

    this.setData({
      slots: this.data.data,
      'configure.height': that.data.visibleItemCount * that.data.itemHeight,
    })
  },

  methods: {
    onScrollReady(e) {
      this.setData({
        'rolling.scrollButtonY': e.detail.scrollButtonY
      });
    },

    onScroll(e) {
      const that = this;
      const index = e.currentTarget.dataset.index;
      // 当前滚动Y轴坐标
      var scrollY = e.detail.scrollY;
      // 当前数据总高度 单选择高度 × 当前列数量
      var heightItemMax = (that.data.itemHeight || 36) * (that.data.slots[index].values.length);
      // 區間
      var section = [];
      // 區間值
      var sectionValue = 0;

      that.data.slots[index].values.forEach((number, index) => {
        section.push(that.data.itemHeight * index)
      })

      section.forEach((c, cindex) => {
        // console.log(c, -scrollY, -scrollY > c)
        if (-scrollY > c) {
          sectionValue = {
            value: cindex,
            0: c + ' ' + -scrollY
          };
        }
      })

      console.log(sectionValue)

      that.data.slotsindex[index] = sectionValue.value;

      this.setData({
        slotsindex: that.data.slotsindex
      })
    },
  }
})

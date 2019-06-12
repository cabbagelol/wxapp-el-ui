import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-icon',
    'el-step',
    'el-title',
    'el-vice'
  ],

  properties: {
    subhead: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: ''
    }
  },

  data: {
    stepsCount: 0,
    iconsolt: 0,
    index: 0
  },

  relations: {
    './steps': {
      type: 'parent',
      linked(target) {
        this.parent = target;
        this.parent.data.step.forEach((i, index) => {
          if (this.__wxExparserNodeId__ == i.__wxExparserNodeId__) {
            this.setData({
              index,
              direction: target.data.direction
            })
          }
        })
      }
    }
  },

  ready () {
    this.$fields('.__step-icon-solt__', {
      computedStyle: ['width']
    }).then(res => {
      this.setData({
        iconsolt: parseInt(res['.__step-icon-solt__'].width)
      })
    })
  },

  methods: {
    onTapStep(e) {
      this.triggerEvent("onetap", {
        el: e,
        index: this.data.index,
        length: this.data.stepsCount
      })
    }
  }
})
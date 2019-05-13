import Elui from '../baseComponent';
const config = require("../index.js");
Elui({
  properties: {
    src: {
      type: String,
      value: './images/cover.png',
      observer(newVal_, oldVal_) {
        this.setData({
          src_: oldVal_
        })
      }
    },
    style: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: false
    },
    lazyload: {
      type: Boolean,
      value: false
    },
    arialabel: {
      type: String,
      value: ''
    },
    isload: {
      type: Boolean,
      value: true
    },
    loadtpye: {
      type: String,
      value: ''
    },
    loadcolor: {
      type: Object,
      value: {}
    }
  },

  data: {
    src_: '',
    load: true
  },

  methods: {
    getValue(e) {
      var object = Object.assign(e.currentTarget.dataset, e.detail, {
        oldsrc: this.data.src_
      })
      return object;
    },

    onError(e) {
      this.setData({
        src: '',
        load: false
      })
      this.triggerEvent('error', Object.assign(this.getValue(e), {
        type: 'error'
      }));
    },

    onLoad(e) {
      const _e = e;
      var that = this;
      that.$fields('.__img__,.__img-item__', {
        computedStyle: ['height', 'width']
      }).then(e => {
        const _img = e['.__img__'];
        if (parseInt(_img.width) == 0 || parseInt(_img.height) == 0) {
          that.setData({
            style: `${that.data.style || ""};width:${50}px;height:${50}px`,
            load: false // 网络
          })
        }
        that.triggerEvent('load', Object.assign(that.getValue(_e), {
          type: 'succeed'
        }));
      })
      that.setData({
        load: false // 非网络
      })
    }
  }
})
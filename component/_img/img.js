const config = require("../index.js");

Component({
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
      if (config.util.in(that)) {
        config.util.$([".__img__", ".__img-item__"]).then(function (e) {
          const _img = e['.__img__'];
          if (_img.width == 0 || _img.height == 0) {
            that.setData({
              style: `${that.data.style || ""};width:${50}px;height:${50}px`,
              load: false
            })
          }
          that.triggerEvent('load', Object.assign(that.getValue(_e), {
            type: 'succeed'
          }));
        })
      }
      that.setData({
        load: false
      })
    }
  }
})
import Elui from '../baseComponent';
Elui({
  properties: {
    src: {
      type: String,
      value: './image/cover.png',
      observer(newVal_, oldVal_) {
        this.setData({
          src_: oldVal_,
          value: newVal_
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
      value: './image/cover.png'
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
    },
    name: {
      type: String,
      value: ''
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    },
    '../_focus/focus': {
      type: 'parent'
    },
    '../_file/file': {
      type: 'parent'
    },
  },

  data: {
    value: '',
    src_: '',
    load: true
  },

  ready () {
    // console.log(this.data.placeholder)
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
        style: `width:${50}px;height:${50}px`,
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
            load: false, // 网络
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
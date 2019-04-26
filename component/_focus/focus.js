Component({
  properties: {
    verifications: {
      type: Object,
      value: {
        title: '不应存在'
      }
    },
    verification: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'danger'
    },
    focus: {
      type: Boolean,
      value: false
    }
  },

  relations: {
    '../_form/form': {
      type: 'parent'
    },
    '../_input/input': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    },
    '../_textarea/textarea': {
      type: 'child',
      linked(target) {
        this.setValue(target)
      }
    }
  },

  data: {
    value: '',
    name: '',
    focus_: {
      data: []
    },
    verificationErr: [],
    verification_: {
      900: {
        v: (t) => {
          return /\s/g.test(t)
        },
        msg: '含空符合'
      },
      901: {
        v: (t) => {
          return t == ''
        },
        msg: '内容为空'
      },
      1000: {
        v: (t) => {
          return /^\u4e00-\u9fa5+$/.test(t)
        },
        msg: '包含中文'
      },
      1001: {
        v: (t) => {
          return /[a-z]/g.test(t)
        },
        msg: '包含小写英文'
      },
      1002: {
        v: (t) => {
          return /[A-Z]/g.test(t)
        },
        msg: '包含大写英文'
      },
      1003: {
        v: (t) => {
          return /[0-9]/g.test(t)
        },
        msg: '包含数字'
      },
      2001: {
        v: (t) => {
          return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test(t)
        },
        msg: '不是正确的邮箱,请以**@**.***为格式'
      }
    }
  },

  ready() {
    this.setData({
      verification_: Object.assign(this.data.verifications, this.data.verification_)
    })
    this.onVerify();
  },

  methods: {
    onEmpty () {
      this.data.focus_.data[0].onEmpty();
    },

    onVerify() {
      var that = this;
      var err = that.data.verificationErr;
      err = [];
      try {
        that.data.verification ? that.data.verification.split(',').forEach(function(i, index) {
          let val = that.data.focus_.data[0].data.value;
          let t = that.data.verification_;
          for (var j in t) {
            if (t[j].v && !!t[j].v(val) && i == j) {
              err.push({
                msg: t[j].msg
              })
            }
          }
          that.setData({
            verificationErr: err
          })
        }) : () => {
          throw '校验格式不通过'
        }
        if (that.data.focus_.data[0]) {
          that.setData({
            verify: that.data.verificationErr.length > 0 ? true : false,
            value: that.data.focus_.data[0].data.value,
            name: that.data.focus_.data[0].data.name,
          })
        }
        that.triggerEvent('change', {
          value: that.data.value,
          name: that.data.name,
          verify: that.data.verificationErr.length > 0 ? true : false,
          verifyresult: that.data.verificationErr
        })
      } catch (e) {
        console.log(e)
      }
    },

    setValue(target) {
      var that = this;
      var focus = that.data.focus_.data;
      focus.push(target);
      that.setData({
        'focus_.data': focus
      })
    },
  }
})
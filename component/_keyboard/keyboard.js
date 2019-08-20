Component({
  properties: {
    title: {
      type: String,
      value: '虚拟键盘'
    },
    value: {
      type:String,
      value: ''
    },
    zIndex: {
      type: Number,
      value: 10
    }
  },

  observers: {
    'value': function (value_) {
      this.data.value = value_
    }
  },

  data: {
    show: false,
    FH: false,
    ZMT: 'X',
    ZM: [],
    k: [],
    f: []
  },

  ready() {
    this.setReady();
  },

  methods: {
    setReady () {
      this.data.ZM = this.getEN();
      this.setData({
        k: [
          this.getNum(),
          this.getENFp(10),
          this.getENFp(8),
          this.getENFp(8)
        ],
        f: [
          ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
          ['-', '_', '+', '{', '}', '[', ']', '<', '>'],
          [':', ';', '"', "'", ',', '.', '?', '='],
          ['/', '|', '~', '`']
        ]
      })
    },

    getNum() {
      var arr = [1,2,3,4,5,6,7,8,9,0];
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
      }
      return arr;
    },

    getEN() {
      var arr = [];
      for (var i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i));
      }
      return arr;
    },

    getENFp(num_) {
      var ret = [];
      var ZM = this.data.ZM;
      for (var i = 0 ; i < num_; i++) {
        var index = Math.floor((Math.random() * ZM.length));
        ret.push({
          D: ZM[index],
          X: ZM[index].toLowerCase(),
        });
        ZM.splice(index, 1);
      }
      return ret;
    },

    onConversion () {
      this.setData({
        'ZMT': this.data.ZMT == 'D' ? 'X' : 'D'
      })
    },

    onSymbol () {
      this.setData({
        'FH': this.data.FH != true
      })
    },

    onInput (e) {
      this.setData({
        value: this.data.value + e.currentTarget.dataset.d,
        key: e.currentTarget.dataset.d
      });
      this.onChange();
    },

    onDelete() {
      var that = this;
      that.setData({
        value: that.data.value.substring(0, that.data.value.length - 1)
      })
      that.onChange();
    },

    onDeleteLong () {
      this.Inter = setInterval(() => {
        this.onDelete()
      }, 100);
    },

    onDeleteLongEnd () {
      clearInterval(this.Inter);
    },

    onChange () {
      this.triggerEvent('keyboard', {
        value: this.data.value,
        key: this.data.key
      })
    },

    onShow () {
      this.setReady();
      this.setData({
        show: true
      })
    },

    onHide () {
      this.setData({
        show: false
      })
    },
  }
})

Component({
  data: {
    color: {
      essential: '#FFF'
    },
    systemnfo: {},
    message: {
      cont: '',
      titile: '',
      type: '',
      icon: true,
      list: [],
      time: function () {}
    },
    start: false
  },

  ready() {
    this.setData({
      systemnfo: wx.getSystemInfoSync()
    })
  },

  methods: {
    runMessage(callback) {
      var that = this;
      that.logtime;
      if (that.data.message.list.length <= 0) {return}
      if (that.data.start) { that.setData({ start: false }); }
      clearTimeout(that.data.message.time);
      that.setData({
        start: true,
        'message.cont': that.data.message.list[0].cont,
        'message.title': that.data.message.list[0].title,
        'message.icon': that.data.message.list[0].icon,
        'message.type': that.data.message.list[0].type,
      });
      that.data.message.time = setTimeout(function() {
        var list = that.data.message.list;
        list.splice(0,1);
        that.setData({
          start: false,
          'message.list': list
        });
        if (list <= 0) { callback() }
        that.runMessage(function () {
          callback()
        })
      }, that.data.message.list[0].time);
    },

    onMessage(data_) {
      var that = this;
      var list = that.data.message.list || [];
      var data_ = Object.assign({
        time: 3000,
        type: '',
        icon: true,
        cont: '',
        title: '',
        succeed() {}
      }, data_);
      list.push(data_);
      if (list.length > 1) {
        for (var i = 0; i < list.length; i++) {
          list[i].time = (list.length == i + 1 ? list[i].time : 1000)
        }
      }
      that.setData({
        'message.list': list
      });
      that.runMessage(function() {
        data_.succeed();
      })
    }
  }
})
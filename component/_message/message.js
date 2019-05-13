import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-message',
    'el-title',
    'el-content'
  ],

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
      time: function () { }
    },
    start: false
  },

  observers: {
    'message.list': function (data_) {
      if (data_ && data_.length <= 0) {
        this.triggerEvent('succeed', {
          type: 'succeed'
        });
        return;
      }
      this.triggerEvent('march', {
        type: 'march',
        list: data_
      });
    }
  },

  ready() {
    this.setData({
      systemnfo: wx.getSystemInfoSync()
    })
  },

  methods: {
    stopMessage () {
      var that = this;
      clearTimeout(that.data.message.time);
      that.setData({
        'start': false,
        'message.list': []
      });
      that.triggerEvent('cancel', {
        tpye: 'cancel'
      });
    },

    runMessage(callback) {
      var that = this;
      that.logtime;
      if (that.data.message.list.length <= 0) { return }
      if (that.data.start) { that.setData({ start: false }); }
      clearTimeout(that.data.message.time);
      that.setData({
        'start': true,
        'message.cont': that.data.message.list[0].cont,
        'message.title': that.data.message.list[0].title,
        'message.icon': that.data.message.list[0].icon,
        'message.type': that.data.message.list[0].type,
        'message.mask': that.data.message.list[0].mask
      });
      that.data.message.time = setTimeout(function () {
        var list = that.data.message.list;
        list.splice(0, 1);
        that.setData({
          'start': false,
          'message.list': list
        });
        if (list <= 0) { typeof callback == 'function' ? callback() : null }
        that.runMessage(function () {
          typeof callback == 'function' ? callback() : null;
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
        mask: true,
        cont: '',
        title: '',
        succeed() { }
      }, data_);
      list.push(data_);
      if (list.length > 1) {
        for (var i = 0; i < list.length; i++) {
          list[i].time = (list.length == i + 1 ? list[i].time : 800)
        }
      }
      that.setData({
        'message.list': list
      });
      that.runMessage(function () {
        that.setData({
          'message.mask': false
        })
        data_.succeed();
      })
    },

    onMessageStart (e) {
      var that = this;
      var point = e.changedTouches[0];
      that.y = point.clientY;
    },

    onMessageEnd (e) {
      var that = this;
      var point = e.changedTouches[0];
      if (point.clientY - that.y <= 20) {
        that.stopMessage();
      }
    },
  }
})
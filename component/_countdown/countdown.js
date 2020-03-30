import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-day',
    'el-month',
    'el-fullyear',
    'el-hours',
    'el-minuter',
    'el-seconds',
    'el-milliseconds',
    'el-interval'
  ],

  properties: {
    value: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    'yInterval': {
      type: String,
      value: '-'
    },
    'tInterval': {
      type: String,
      value: ':'
    },
    day: {
      type: Boolean,
      value: true
    },
    month: {
      type: Boolean,
      value: true
    },
    fullyear: {
      type: Boolean,
      value: true
    },
    hours: {
      type: Boolean,
      value: true
    },
    minutes: {
      type: Boolean,
      value: true
    },
    seconds: {
      type: Boolean,
      value: true
    },
    milliseconds: {
      type: Boolean,
      value: false
    },
  },

  data: {
    value: '',
    time: {},
    inter: {
      0: null,
      1: null
    }
  },

  observers: {
    'datenumber': function(num) {
      if (num <= 0) {
        this.delelInder();
        this.triggerEvent("succeed", {
          type: 'el-countdown',
          end: this.data.end,
          value: this.data.value
        })
      }
    }
  },

  ready() {
    this.setReady();
  },

  methods: {
    setReady () {
      // this.setTime();
      this.i = 0;
      do {
        this.i++;
      } while (this.i < 1) {
        this.data.inter['0'] = setInterval(() => {
          this.setTime();
        }, 1000);
        this.data.inter['1'] = setInterval(() => {
          if (this.data.datenumber > 0) {
            this.getTimemilliseconds();
          }
        }, 10);
      }
    },

    setTime() {
      this.setData({
        time: Object.assign(this.data.time, this.getTime())
      })
    },

    getTimenumber(date_) {
      return new Date(date_).getTime();
    },

    getTime() {
      var date = this.data.value ? new Date(this.data.value).getTime() : new Date().getTime();
      var end = new Date(this.data.end).getTime();
      this.setData({
        datenumber: date = end - date
      })
      console.log(date)

      return {
        fullyear: date >= 0 ? Math.floor(date / 1000 / 60 / 60 / 24 / 360) : 0,
        day: date >= 0 ? Math.floor(date / 1000 / 60 / 60 / 24 % 24) : 0,
        hours: date >= 0 ? Math.floor(date / 1000 / 60 / 60 % 24) : 0,
        minutes: date >= 0 ? Math.floor(date / 1000 / 60 % 60) : 0,
        seconds: date >= 0 ? Math.floor(date / 1000 % 60) : 0,
      }
    },

    getTimemilliseconds() {
      this.setData({
        time: Object.assign(this.data.time, {
          milliseconds: new Date().getMilliseconds()
        })
      })
    },

    delelInder() {
      clearInterval(this.data.inter['0']);
      clearInterval(this.data.inter['1']);
      this.i = 0;
      this.setData({
        'time.milliseconds':0
      })
    },

    stop () {
      this.delelInder();
    },

    start () {
      if (!!this.i) {
        return;
      }
      this.setReady();
    }
  }
})
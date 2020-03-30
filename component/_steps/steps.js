import Elui from '../baseComponent';
Elui({
  options: {
    addGlobalClass: true
  },

  properties: {
    direction: {
      type: String,
      value: ''
    },
    status: {
      type: String,
      value: '0'
    },
    circulation: {
      type: Boolean,
      value: false
    }
  },

  relations: {
    './step': {
      type: 'child',
      linked(target) {
        this.data.step.push(target);
        this.setData({
          step: this.data.step
        });
      }
    }
  },

  observers: {
    'status': function(e) {
      this.setStatus();
    }
  },

  data: {
    step: []
  },

  ready() {
    this.setStatus();
  },

  methods: {
    setStatus() {
      this.data.step.forEach(i => {
        i.setData({
          stepsCount: this.data.step.length,
          stepStatus: this.data.status
        })
      })
    },

    onCallBack(call) {
      var o = Object.assign(call, {
        index: this.data.status
      });
      this.triggerEvent("result", o);
      return Object.assign(call, o);
    },

    on(event_, callback) {
      switch (event_) {
        case 'next':
          this.next((e) => {
            typeof callback == 'function' ? callback(this.onCallBack(e)) : null
          });
          break;
        case 'previous':
          this.previous((e) => {
            typeof callback == 'function' ? callback(this.onCallBack(e)) : null
          });
          break;
        case 'reset':
          this.reset((e) => {
            typeof callback == 'function' ? callback(this.onCallBack(e)) : null
          });
          break;
      }
    },

    next(callback) {
      // TODO 待优化语法
      var status = Number(this.data.status);
      var iscirculation = this.data.circulation;
      this.setData(iscirculation ? {
        status: status < this.data.step.length - 1 ? status += 1 : (() => {
          callback({
            code: 10,
            msg: 'start'
          })
          return 0;
        })()
      } : {
        status: status < this.data.step.length - 1 ? status += 1 : (() => {
          callback({
            code: 15,
            msg: 'end'
          })
          return this.data.step.length - 1;
        })()
      })
      this.setStatus();
    },

    previous(callback) {
      // TODO 待优化语法
      var status = Number(this.data.status);
      var iscirculation = this.data.circulation;
      this.setData(iscirculation ? {
        status: status > 0 ? status -= 1 : (() => {
          callback({
            code: 20,
            msg: 'start'
          })
          return this.data.step.length - 1;
        })()
      } : {
        status: status > 0 ? status -= 1 : (() => {
          callback({
            code: 25,
            msg: 'end'
          })
          return this.data.circulation ? 0 : 0;
        })()
      })
      this.setStatus();
    },

    reset() {
      this.setData({
        status: 0
      })
    },
  }
})
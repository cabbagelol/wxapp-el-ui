Component({
  externalClasses: [
    'el-button'
  ],

  options: {
    addGlobalClass: true,
  },

  properties: {
    style: String,
    disabled: Boolean,
    radius: Boolean,
    size: String,
    align: String,

    "open-type": {
      type: String,
      value: 'getUserInfo'
    },
    aps: {
      type: Object,
      value: {
        isShow: null
      }
    },
    playIndex: {
      type: null,
      value: null
    },
    page: {
      type: String,
      value: 'index'
    }
  },
 
  ready() {
  },

  methods: {
    onTap(e) {
      this.triggerEvent('tag', e)
    }
  }
})
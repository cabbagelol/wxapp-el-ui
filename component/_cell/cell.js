import Elui from '../baseComponent';
Elui({
  externalClasses: [
    'el-title',
    'el-label',
    'el-cont',
    'el-icon',
    'el-onward'
  ],

  options: {
    multipleSlots: true
  },

  properties: {
    title: String,
    label: String,
    icon: Boolean,
    islink: Boolean
  },

  methods: {
    onclick(e) {
      this.triggerEvent('click', e)
    }
  }
})
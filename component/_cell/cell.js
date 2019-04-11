const config = require("../index.js");

Component({
  options: {
    multipleSlots: true
  },

  properties: {
    title: String,
    label: String,
    icon: Boolean,
    elclass: String,
    islink: Boolean
  },

  methods: {
    onclick(e) {
      this.triggerEvent('click', e)
    }
  }
})
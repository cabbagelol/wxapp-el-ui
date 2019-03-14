Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    style: String,
    disabled: Boolean,
    radius: Boolean,
    size: String,
    align: String
  },
 
  ready() {
  },

  methods: {
    onTap(e) {
      this.triggerEvent('tag', e)
    }
  }
})
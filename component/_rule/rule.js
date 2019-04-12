Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    rule: {
      type: Object,
      value: {
        title: '',
        lines: {
          color: "#E3E3E3",
          width: 20,
          height: 1
        },
        font: {
          color: "#555",
          margin: 10,
          size: 15
        }
      }
    }
  },

  options: {
    multipleSlots: true
  },
})
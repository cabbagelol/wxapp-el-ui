Component({
  properties: {
    rule: {
      type: Object,
      value: {
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
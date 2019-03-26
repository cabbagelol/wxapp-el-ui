Component({
  relations: {
    '../_layout/layout': {
      type: 'parent'
    }
  },

  properties: {
    align: {
      value: "start",
      type: String
    },
  }
});
Component({
  properties: {

  },

  relations: {
    '../_radio/radio': {
      type: 'child',
      linked(target) {
        let group = this.data.group;
        group.push(target);
        this.setData({
          group
        })
      },
    }
  },

  data: {
    group: []
  },

  methods: {

  }
})

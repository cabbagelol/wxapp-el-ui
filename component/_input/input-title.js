import Elui from '../baseComponent';
Elui({
  properties: {
    omit: Number,
    max: String,
    min: String
  },

  relations: {
    './input': {
      type: 'parent',
      linked(target) {
      },
      linkChanged(target) {
      },
      unlinked(target) {
      }
    }
  },

  data: {

  },

  methods: {

  }
})

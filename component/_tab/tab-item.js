import Elui from '../baseComponent';
const config = require("../index.js");
const tabBehavior = require('tabBehavior');
Elui({
  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      valur: ''
    },
    disabled: Boolean,
    value: String,
    class: String,
    style: String
  },

  behaviors: [tabBehavior],

  relations: {
    './tab': {
      type: 'parent'
    }
  },

  data: {
    index: 0
  },

  methods: {
    onTabSelect () {
      var that = this
      const parent = that.getRelationNodes('./tab')[0];
      that.setData({
        'index': parent.data.tabs.index,
        'tabitem.title': parent.data.tabs.title
      })
    }
  }
})

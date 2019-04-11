Page({
  data: {
    head: {
      title: '地址',
      back: true
    },
  },

  onColumnChange (e) {
    console.log(e)
  },

  onChange (e) {
    console.log('确认')
    console.log(e)
  }
})
Page({
  data: {
    head: {
      title: '标签',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    t: ''
  },

  onReady () {
    var that = this;
    setTimeout(()=>{
      console.log('1')
      that.setData({
        t: '213sd'
      })
    }, 1000);
    this.messgae = this.selectComponent(".messgae");
  },

  onClose (e) {
    var that = this;
    that.messgae.onMessage({
      cont: '关闭标签'
    })
    console.log(1)
  },

  onTag (e) {
    console.log(2)
  }
})

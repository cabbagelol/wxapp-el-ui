Page({
  data: {
    head: {
      title: '文件',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    file: {
      show: false,
      modal: true,
      count: 2
    },
    filelist: []
  },

  onFile (e) {
    var that = this;
    var filelist = that.data.filelist;
    e.detail.tempFiles.forEach(function (i) {
      i.type = e.detail.type;
      filelist.push(i);
    })
    this.setData({
      'filelist': filelist
    })
    console.log(filelist)
  }
})

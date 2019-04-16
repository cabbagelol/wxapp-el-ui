Page({
  data: {
    head: {
      title: '文件',
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

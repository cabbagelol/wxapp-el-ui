const config = require("../index.js");

Component({
  externalClasses: [
    'el-curtain',
    'el-button-right',
    'el-input'
  ],


  properties: {
    file: {
      type: Object,
      value: {
        show: false,
        modal: true,
        count: 1,
        video: {
          maxDuration: 60,
          compressed: true,
          camera: 'front'
        },
        files: {
          type: 'all',
          extension: null
        }
      }
    },
    album: {
      type: Boolean,
      value: false
    },
    camera: {
      type: Boolean,
      value: false
    },
    files: {
      type: Boolean,
      value: false
    },
    video: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onPopup() {
      if (!this.data.album && !this.data.camera && !this.data.files && !this.data.video) { return }
      this.setData({
        'file.show': this.data.file.show != true
      })
    },

    onSucceed (d_, type_) {
      var that = this;
      d_.type = type_;
      that.triggerEvent('succeed', d_)
    },

    onSelechFileType(e) {
      var that = this
      that.onPopup()
      switch (e.target.dataset.type) {
        case 'album':
        case 'camera':
          wx.chooseImage({
            count: that.data.file.count,
            sizeType: that.data.file.sizeType,
            sourceType: [e.target.dataset.type],
            success(img_) {
              if (img_.errMsg == 'chooseImage:ok') {
                that.onSucceed(img_, 'image')
              }
            }
          })
          break;
        case 'file':
          wx.chooseMessageFile({
            count: that.data.file.count,
            type: that.data.file.files.type,
            extension: that.data.file.files.extension,
            success (files_) {
              if (files_.errMsg == 'chooseMessageFile:ok') {
                that.onSucceed(files_, 'file')
              }
            }
          })
          break;
        case 'video': 
          wx.chooseVideo({
            sourceType: ['camera'],
            compressed: that.data.file.video.compressed,
            maxDuration: that.data.file.video.maxDuration,
            camera: that.data.file.video.camera,
            success(video_) {
              video_.tempFilePath = [video_.tempFilePath]
              video_.tempFiles = [{
                path: video_.tempFilePath
              }]
              that.onSucceed(video_, 'video')
            }
          })
        break;
      }
    }
  }
})
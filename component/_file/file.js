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
          extension: false
        },
      },
      observer: function (newVal, oldVal) {
        this.setData({
          file_: Object.assign(oldVal, newVal)
        })
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

  data: {
    file_: {}
  },

  methods: {
    onPopup() {
      if (!this.data.album && !this.data.camera && !this.data.files && !this.data.video) { return }
      this.setData({
        'file_.show': this.data.file_.show != true
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
            count: that.data.file_.count,
            sizeType: that.data.file_.sizeType,
            sourceType: [e.target.dataset.type],
            success(img_) {
              if (img_.errMsg == 'chooseImage:ok') {
                that.onSucceed(img_, 'image')
              }
            }
          })
          break;
        case 'file':
          console.log(that.data.file_)
          let conf = {
            count: that.data.file_.count,
            type: that.data.file_.files.type,
            success(files_) {
              if (files_.errMsg == 'chooseMessageFile:ok') {
                that.onSucceed(files_, 'file')
              }
            }
          };
          if (that.data.file_.files.extension) { conf.extension = that.data.file_.files.extension}
          wx.chooseMessageFile(conf);
          break;
        case 'video': 
          wx.chooseVideo({
            sourceType: ['camera'],
            compressed: that.data.file_.video.compressed,
            maxDuration: that.data.file_.video.maxDuration,
            camera: that.data.file_.video.camera,
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
const qiniuUploader = require("../public/js/qiniuUploader.js");

module.exports = {
  class: "__elui__",
  util: {
    that: null,
    $ (name_) {
      var $self = this;
      var $res = new Object({ self: $self.that });
      return new Promise(function (resolve, reject) {
        wx.createSelectorQuery().in($self.that).selectAll(String(name_)).boundingClientRect(function (e) {
          e.forEach(function (i, index) {
            $res[name_[index]] = i
          })
          resolve($res)
        }).exec()
      }) 
    },
    in(that_) {
      this.that = that_;
      return this.that ? true : false
    },

    getQNY(data_, callback) {
      var that = this;
      qiniuUploader.upload(data_.url, (res) => {
        callback(res);
      }, (error) => {
        console.log('error: ' + error);
      }, {
          region: 'SCN',
          domain: data_.domain,
          uptokenURL: data_.uptokenURL,
        }, function (res) {
          console.log(res)
        });
    },
  },
}
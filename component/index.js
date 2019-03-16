module.exports = {
  class: "__elui__",
  util: {
    that: null,
    $ (name_) {
      var $self = this;
      return new Promise(function (resolve, reject) {
        wx.createSelectorQuery().in($self.that).select(name_).boundingClientRect(function (e) {
          resolve(e)
        }).exec()
      }) 
    },
    in(that_) {
      this.that = that_;
      return this.that ? true : false
    },
  },
}
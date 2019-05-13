module.exports = {
  util: {
    $fields(name_, d_) {
      var that = this;
      var res = {};
      return new Promise(function(resolve, reject) {
        wx.createSelectorQuery().in(that).selectAll(String(name_)).fields(Object.assign({
          id: true
        }, d_), function(e) {
          e.forEach(function(i, index) {
            if (typeof name_ === 'string' && name_.split(',').length == 1 && e.length > 1) {
              res[`${name_}${index}`] = i;
              res.length = e.length;
            } else if (typeof name_ === 'string' && name_.split(',').length == e.length) {
              // console.log(index, i, name_, e[index]['id'])
              res[e[index]['id']] = i;
              res.length = e.length;
            } else {
              res[(e.length > 1 ? name_[index] : name_)] = i;
              res.length = e.length;
            }
          })
          resolve(res);
        }).exec();
      })
    },
  },
}
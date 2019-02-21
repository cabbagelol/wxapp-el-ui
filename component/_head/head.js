Component({
    options: {
        multipleSlots: true
    },

    properties: {
        head: Object,
        stickie: Boolean
    },

    data: {
        nav: {
          interne: {
            navHeight: 100
          }
        }
    },

    attached () {
        var that = this
        wx.getSystemInfo({
            success (res) {
                that.setData({
                  nav: Object.assign(res, {
                    interne: {
                      navHeight: res.statusBarHeight + 45
                    }
                  })
                })
              console.log(that.data.nav)
            }
        })
    },

    methods: {
        onBack() {
            wx.navigateBack({
                delta: 1
            })
        }
    }
})

Component({
    options: {
        multipleSlots: true
    },

    properties: {
        head: Object,
        load: Boolean,
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

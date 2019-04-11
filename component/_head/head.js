Component({
    options: {
        multipleSlots: true
    },

    properties: {
        load: {
            type: Boolean,
            value: false
        },
        stickie: {
            type: Boolean,
            value: true
        },
        head: Object
    },

    data: {
        nav: {
            interne: {
                navHeight: 100
            }
        }
    },

    attached() {
        var that = this
        wx.getSystemInfo({
            success(res) {
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
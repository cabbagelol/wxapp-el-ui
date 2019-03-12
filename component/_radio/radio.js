Component({
    properties: {
        value: String,
        datas: Array
    },

    data: {
        datas: [],
        value: ''
    },

    ready () {
        var that = this
        var datas = []
        this.data.datas.forEach(function (i, index) {
            datas.push(Object.assign(i,{
                checked: (that.data.value == i.value ? true : false)
            }))
        })
        this.setData({ datas })
    },

    methods: {
        radioChange: function (e) {
            this.setData({
                value: e.detail.value
            })
            this.triggerEvent('change', e)
        }
    }
})

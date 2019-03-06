Component({
    options: {
        multipleSlots: true
    },

    properties: {
        title: String,
        label: String,
        icon: Boolean,
        elclass: String,
        islink: Boolean
    },

    data: {},

    methods: {
        onclick (e) {
            this.triggerEvent('click', e)
        }
    }
})

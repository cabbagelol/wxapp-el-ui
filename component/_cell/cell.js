Component({
    options: {
        multipleSlots: true
    },

    properties: {
        title: String,
        label: String,
        content: String,
        icon: Boolean,
        arrowhead: Boolean,
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

const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '滚动幕布',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    scroll: {
      isscroll: false,
      drag: false,
      start: true,
      delay:3000,
      orientation: 'left',
      velocity: 1,
      cont: 'A network error has occurred. The service may be blocked by your ISP or in your area.',
      color: '#555',
      background: '#FFF',
      width: 500
    },
    array: [{ n: '左至右', v: 'left' }, { n: '右至左', v: 'right'}],
    arrayi: 0
  },

  bindPickerChange(e) {
    this.setData({
      arrayi: e.detail.value,
      'scroll.orientation': this.data.array[e.detail.value].v
    })
  },
})
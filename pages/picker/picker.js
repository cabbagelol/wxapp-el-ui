const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '选择器',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    slots: [
      {
        flex: 1,
        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
        className: 'slot1',
        textAlign: 'right'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
        className: 'slot3',
        textAlign: 'left'
      }
    ]
  },


})

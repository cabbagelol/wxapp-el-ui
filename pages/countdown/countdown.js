const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '倒计时',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    time: {
      end: '2090-01-01 00:00:00',
      start: '2089-12-02 00:00:00',
      day: true,
      month: true,
      fullyear: true,
      hours: true,
      minutes: true,
      seconds: true,
      milliseconds: false
    }
  },

  onCountdownSucceed () {
    console.log('活动结束');
  },
})
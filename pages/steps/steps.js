const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '步骤条',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
    stepHorizontal: {
      index: 0
    },
    stepVertical: {
      index: 0
    },
    stepsindex: 0,
    circulation: false
  },

  onLoad() {
    this.messgae = this.selectComponent(".messgae");
    this.steps = [
      this.selectComponent(".steps-horizontal-1"),
      this.selectComponent(".steps-horizontal-2")
    ];
  },

  onMessage (e) {
    this.messgae.onMessage({
      cont: e.detail.index + '序列'
    })
  },

  onNext () {
    this.steps[0].on('next');
    this.steps[1].on('next');
  },

  onPrevious () {
    this.steps[0].on('previous');
    this.steps[1].on('previous');
  },

  onReset () {
    this.steps[0].on('reset');
    this.steps[1].on('reset');
  },

  onStepsResult (e) {
    console.log(e)
    this.setData({
      stepsindex: e.detail.index
    })
  },

  onStepHorizontal () {
    this.setData({
      'stepHorizontal.index': this.data.stepHorizontal.index < 2 ? this.data.stepHorizontal.index+=1 : 0
    })
  },

  onStepVertical() {
    this.setData({
      'stepVertical.index': this.data.stepVertical.index < 9 ? this.data.stepVertical.index += 1 : 0
    })
  }
})

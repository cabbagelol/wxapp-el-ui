/**
 * Created by folgerfan on 2017/8/3.
 */
var slideBgColors = 'green,gray,blueviolet,blue,rebeccapurple,yellowgreen,gold,darkslategray,brown,darkslategray'.split(',');
var deceleration = 0.005; //阻尼系数,越小越快
function momentum(current, start, time, lowerMargin, wrapperSize) {
  var distance = current - start,
    speed = Math.abs(distance) / time,
    destination,
    duration;
  destination = current + speed / deceleration * (distance < 0 ? -1 : 1);
  duration = speed / deceleration;

  if (destination < lowerMargin) {
    destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
    distance = Math.abs(destination - current);
    duration = distance / speed;
  } else if (destination > 0) {
    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
    distance = Math.abs(current) + destination;
    duration = distance / speed;
  }
  return {
    destination: Math.round(destination),
    duration: duration
  };
}

function getTime() {
  return +new Date()
}
var bounceTime = 500,
  sysInfo = wx.getSystemInfoSync();
var windowWidth = sysInfo.windowHeight;
Page({
  data: {
    slideBgColors,
    distY: 0,
    duration: 0,
    scrollWidth: 100000
  },
  y: 0,
  maxScrollY: 0,
  wrapperWidth: windowWidth,

  _start(e) {
    var point = e.touches[0];
    this.moved = false;
    this.distY = 0;

    this.startTime = getTime();
    this.lastMoveTime = getTime();
    this.startY = this.y;
    this.absStartY = this.y;
    this.pointY = point.pageY;
  },
  _move(e) {
    var point = e.touches[0],
      deltaY = point.pageY - this.pointY,
      timestamp = +new Date(),
      newY, absDistY;

    console.log(e)

    this.pointY = point.pageY;
    this.distY += deltaY;
    absDistY = Math.abs(this.distY);
    // We need to move at least 10 pixels for the scrolling to initiate
    if (timestamp - this.endTime > 300 && absDistY < 10) {
      return;
    }
    newY = this.y + deltaY;
    // Slow down if outside of the boundaries
    if (newY > 0 || newY < this.maxScrollY) {
      newY = this.y + deltaY / 3;
    }
    this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
    this.moved = true;
    this._translate(newY);
    if (timestamp - this.startTime > 300) {
      this.startTime = timestamp;
      this.startY = this.y;
    }
  },
  _end(e) {
    var momentumY,
      duration = getTime() - this.startTime,
      newY = Math.round(this.y),
      time = 0,
      that = this;
    this.endTime = getTime();

    if (!this.moved) {
      return;
    }
    if (this.resetPosition(bounceTime)) {
      return;
    }
    // start momentum animation if needed
    if (duration < 300 && Math.abs(this.startY - this.y) > 10) {
      momentumY = momentum(this.y, this.startY, duration, this.maxScrollY, this.wrapperWidth);
      newY = momentumY.destination;
      time = momentumY.duration;
      this._translate(newY, time);
      setTimeout(function() {
        that.resetPosition(bounceTime)
      }, time)
    }
  },
  _translate: function(y, time) {
    y = Math.round(y);
    this.setData({
      distY: y,
      duration: time || 0
    });
    this.y = y;
  },
  resetPosition: function(time) {
    var y = this.y,
      time = time || 0;
    if (this.y > 0) {
      y = 0;
    } else if (this.y < this.maxScrollY) {
      y = this.maxScrollY;
    }
    if (y == this.y) {
      return false;
    }
    this._translate(y, time);
    return true;
  },
  onReady() {
    var sum = 0,
      that = this;

    wx.createSelectorQuery().selectAll('.slide').boundingClientRect(function(rects) {
      //计算scroller宽度和可滚动距离
      rects.forEach(rect => sum += rect.height);
      that.maxScrollY = that.wrapperWidth - sum;
      that.setData({
        scrollWidth: sum
      })
    }).exec();
  }
});
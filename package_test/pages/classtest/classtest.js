// pages/classtest/classtest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clubs:[
      {image:'../../resources/classtest/classtest_img.png',name:"aa"},
      {image:'../../resources/classtest/classtest_img.png',name:"aa"},
      {image:'../../resources/classtest/classtest_img.png',name:"aa"},
      {image:'../../resources/classtest/classtest_img.png',name:"aa"},
      {image:'../../resources/classtest/classtest_img.png',name:"aa"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //触摸开始事件
  touchstart: function(e) {
    console.log(e.touches[0].pageY);
    this.data.touchDot = e.touches[0].pageY;
    var that = this;
    this.data.interval = setInterval(function(){
      that.data.time+=1;
    },100);
  },
  //触摸移动事件
  touchmove: function(e) {
    let touchMove = e.touches[0].pageY;
    let touchDot = this.data.touchDot;
    let time = this.data.time;
    console.log("touchMove: " + touchMove + ", touchDot: " + touchDot + ", diff: " + (touchMove - touchDot));
    //向左滑动
    if(touchMove - touchDot <= -40 && time<10 &&!this.data.done) {
      console.log("向左滑动");
      this.data.done = true;
      this.scrollTop();
    }
    //向右滑动
    if (touchMove - touchDot >= 40 && time < 10 && !this.data.done) {
      console.log("向右滑动");
      this.data.done = true;
      this.scrollBottom();
    }
  },
  //触摸结束事件
  touchend: function(e) {
    clearInterval(this.data.interval);
    this.data.time = 0;
    this.data.done = false;
  },
  //向左滑动事件
  scrollTop(){
    var animation1 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;

    this.animation1.translateY(-60).opacity(0).step();
    this.animation2.translateY(-140).opacity(0.5).scale(0.85,0.85).step();
    this.animation3.translateY(-110).opacity(0.5).scale(0.9,0.9).step();
    this.animation4.translateY(-70).opacity(1).scale(1,1).step();
    this.animation5.translateY(-30).opacity(0.5).scale(0.9,0.9).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export()
    })

    var that = this;
    setTimeout(function () {
      that.animation1.translateY(-50).opacity(0.2).scale(0.85, 0.85).step({ duration: 0, timingFunction: 'linear'});
      that.animation2.translateY(-40).opacity(0.5).scale(0.9, 0.9).step({ duration: 0, timingFunction: 'linear' });
      that.animation3.translateY(0).opacity(1).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation4.translateY(40).opacity(0.5).scale(0.9, 0.9).step({ duration: 0, timingFunction: 'linear' });
      that.animation5.translateY(50).opacity(0.2).scale(0.85, 0.85).step({ duration: 0, timingFunction: 'linear' });
      that.setData({
        animation1: animation1.export(),
        animation2: animation2.export(),
        animation3: animation3.export(),
        animation4: animation4.export(),
        animation5: animation5.export()
      })
    }.bind(this), 195)

    let array = this.data.clubs;
    let shift = array.shift();
    array.push(shift);

    setTimeout(function () {
      this.setData({
        clubs: array
      })
    }.bind(this), 195)
  },

  //向下滑动事件
  scrollBottom() {
    var animation1 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;

    this.animation1.translateY(30).opacity(0.9).scale(0.9,0.9).step();
    this.animation2.translateY(30).opacity(1).scale(1, 1).step();
    this.animation3.translateY(30).opacity(0.9).scale(0.9, 0.9).step();
    this.animation4.translateY(30).opacity(0.6).scale(0.85, 0.85).step();
    this.animation5.translateY(30).opacity(0).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export()
    })

    var that = this;
    setTimeout(function () {
      that.animation1.translateY(-25).opacity(0.6).scale(0.85, 0.85).step({ duration: 0, timingFunction: 'linear' });
      that.animation2.translateY(-20).opacity(0.9).scale(0.9, 0.9).step({ duration: 0, timingFunction: 'linear' });
      that.animation3.translateY(0).opacity(1).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation4.translateY(20).opacity(0.9).scale(0.9, 0.9).step({ duration: 0, timingFunction: 'linear' });
      that.animation5.translateY(25).opacity(0.6).scale(0.85, 0.85).step({ duration: 0, timingFunction: 'linear' });
      that.setData({
        animation1: animation1.export(),
        animation2: animation2.export(),
        animation3: animation3.export(),
        animation4: animation4.export(),
        animation5: animation5.export()
      })
    }.bind(this), 195)

    let array = this.data.clubs;
    let pop = array.pop();
    array.unshift(pop);

    setTimeout(function () {
      this.setData({
        clubs: array
      })
    }.bind(this), 195)
  }
})
// pages/testresult1/testresult1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_pay_content:true, //  是否现实支付内容
    show_pay_opera: false, //  是否现实支付按钮
    show_pay_box: true, //  是否现实分析content
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

  // 支付
  gotoPay(e){
    this.setData({
      show_pay_content:false,
      show_pay_opera:true
    })
  },
  closePay(e){
    this.setData({
      show_pay_box:false
    })
  },

  // 跳转分享页面
  gotoShare(e){
    wx.navigateTo({
      url: '/pages/testshare/testshare'
    })
  }
})
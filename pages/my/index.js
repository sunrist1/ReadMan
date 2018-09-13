// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /******第一部分******/
    usertx:"http://s2.sinaimg.cn/mw690/001t9U6Czy6LCmGZvGNd1&690",//用户头像
    username:"代用名",//用户昵称
    xinglist:[0,1,2,3,4,5],//星列表
    xing:2,//星个数
    userphone:"136-***-2345",//手机号码
    /******第二部分******/
    zhengnum:6,//证书的个数
    titlenum:4,//标签个数
    jifennum:4,//积分的值
    /******第三部分******/
    payfornum: 6,//待付款个数
    sendnum: 0,//待发货个数
    signnum: 2,//待收货个数
    refundnum:1,//退款个数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //编辑用户信息
  goeditmy:function(){
    wx.navigateTo({
      url: '../userinfo/index',
    })
  },
  //证书墙
  gozhengshu: function () {
    wx.navigateTo({
      url: '../zhengshu/index',
    })
  },
  //标签
  gotitle: function () {
    wx.navigateTo({
      url: '../zhengshu/index',
    })
  },
  //积分
  gojifen: function () {
    wx.navigateTo({
      url: '../zhengshu/index',
    })
  },
  //全部订单
  goallorder: function () {
    wx.navigateTo({
      url: '../order/index?id=0',
    })
  },
  //订单状态
  goorder: function (e) {
    wx.navigateTo({
      url: '../order/index?id='+e.currentTarget.dataset.id,
    })
  },
  //我的活动
  goactivity:function(){
    wx.navigateTo({
      url: '../activity/index',
    })
  },
  //购物车
  goshopcart:function(){
    wx.navigateTo({
      url: '../shopcart/index',
    })
  },
  //积分券
  goquan: function () {
    wx.navigateTo({
      url: '../ticket/index',
    })
  },
  //教师
  goteacher:function(){
    wx.navigateTo({
      url: '../teacher/index',
    })
  },
  //签到记录
  gorecord: function () {
    wx.navigateTo({
      url: '../record/index',
    })
  },
  //退出登录
  loginout:function(){
    wx.showToast({
      title: '退出登录',
    })
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

  }
})
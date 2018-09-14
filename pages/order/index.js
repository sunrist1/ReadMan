// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab:0,//选中的tab
    orderlist:[
      {
        orderid:1,
        orderno:'232445',
        orderstatustxt:"待付款",
        goods:[
          {
            id:1,
            imgpath:"http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name:"高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr:"颜色:粉红色",
            jifen:10,
            buynum:1
          },
          {
            id: 2,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 20,
            buynum: 1
          }
        ],
        buygoodsnum:2,
        sumprice:30,
        orderstatus:1
      },
      {
        orderid: 2,
        orderno: '232445',
        orderstatustxt: "已完成",
        goods: [
          {
            id: 1,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 10,
            buynum: 1
          }
        ],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 2
      },
      {
        orderid: 3,
        orderno: '232445',
        orderstatustxt: "待收款",
        goods: [
          {
            id: 1,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 10,
            buynum: 1
          }
        ],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 3
      },
      {
        orderid: 4,
        orderno: '232445',
        orderstatustxt: "待发货",
        goods: [
          {
            id: 1,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 10,
            buynum: 1
          }
        ],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 4
      },
      {
        orderid: 5,
        orderno: '232445',
        orderstatustxt: "已取消",
        goods: [
          {
            id: 1,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 10,
            buynum: 1
          }
        ],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 5
      },
    ],//订单列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //切换tab
  chktabopt:function(e){
    var id=e.currentTarget.dataset.id;
    this.setData({
      chktab:id
    })
  },
  //跳转到订单详情
  godetail:function(e){
    wx.navigateTo({
      url: '../order/detail?id='+e.currentTarget.dataset.id
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
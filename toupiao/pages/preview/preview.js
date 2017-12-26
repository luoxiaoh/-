// pages/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: '../../images/index-image.png' },
      { url: '../../images/index-image.png' },
      { url: '../../images/index-image.png' }
    ],
    text: "这里是人物或者机构的详情介绍文字这里是人物或者机构的详情介绍文字这里是人物或者机构的详情介绍文字这里是人物或者机构的详情介绍文字这里是人物或者机构的详情介绍文字这里是人物或者机构的详情介绍文字。",
    name: "宗馥莉",
    num: "{  2017 票  }"
  },
  toSignUp:function(){
    wx.navigateBack(1);
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

  }
})
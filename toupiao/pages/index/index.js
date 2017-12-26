//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: '罗小黑',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: '../../images/index-image.png' },
      { url: '../../images/index-image.png' },
      { url: '../../images/index-image.png' }
    ],
    ddName:"周波",
    ddNum:"2017",
  },
  //事件处理函数
  toDetails: function () {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  onLoad: function () {
  var getAppInfo = app.globalData.userInfo;
    console.log(app.globalData.userInfo)
    console.log(app.globalData)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
//app.js
App({
  onLaunch: function (options) {
    // 展示本地存储能力
    var userInformation = {}
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var ApiHost = "http://118.126.109.20:3000/phone";
    // 登录
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        wx.request({
          url: ApiHost+"/ticket",
          method: 'POST',
          data:{
            userName: userInfo.nickName
          },
          header: {
            'content-type': 'application/json'
          },
          success(res){
            console.log(res.data)
          }
        })
        userInformation.nickName = userInfo.nickName,  //用户姓名
        userInformation.avatarUrl = userInfo.avatarUrl //用户头像
      }, fail: function () {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                    wx.getUserInfo({
                      success: function (res) {
                        var userInfo = res.userInfo;
                        userInformation.nickName = userInfo.nickName,  //用户姓名
                        userInformation.avatarUrl = userInfo.avatarUrl //用户头像
                      }
                    })
                  }
                }, fail: function (res) {

                }
              })

            }
          }
        })
      }, complete: function (res) {


      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
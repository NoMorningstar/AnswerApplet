var db = wx.cloud.database();
var app = getApp();
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    avatarUrl: '',
    nickName: '',
    score: '',
    order: '',
    userInfo: {},
    userName: 'null',
    userClass: 'null'
  },


  onLoad: function(options) { //通过openid获取到数据库中的用户信息
    db.collection('userInfo').get({
      success: res => {
        console.log(res.data)
        this.setData({
          userInfo: res.data[0].userInfo,
          avatarUrl: res.data[0].avatarUrl,
          avatarUrl: res.data[0].avatarUrl,
          userName: res.data[0].name,
          userClass: res.data[0]._class,
          score: Math.round(res.data[0].score),
          order: res.data[0].order.tea
        })

      }
    })


  },
  goLogs: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })

  },

  feedback: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  clickGit: function() {
    wx.setClipboardData({
      data: this.data.github,
      success: res => {
        wx.showModal({
          title: '已复制github地址',
          content: '如有需要欢迎访问本程序Github项目！',
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
// pages/dialog/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  /**
   * 分享到朋友圈
   */
  onShareTimeline: function () {

  },

  handleTapType1: function () {
    wx.navigateTo({
      url: '/yuyan/pages/guide/guide',
    })
  },

  handleTapType2: function () {
    // 由于微信限制个人小程序提供视频服务，暂时注释掉跳转优酷应用的逻辑，可以本地进行预览
    // wx.navigateTo({
    //   url: '/youku/pages/index/index',
    // })
    wx.showToast({
      title: '由于微信限制个人小程序提供视频服务，请克隆项目本地预览此功能',
      icon: 'none',
      duration: 5000
    })
  },

  handleTapType3: function () {
    wx.navigateTo({
      url: '/decrypt/pages/index/index',
    })
  },

  handleTapType4: function () {
    wx.navigateTo({
      url: '/yanxuan/pages/index/index',
    })
  },
})
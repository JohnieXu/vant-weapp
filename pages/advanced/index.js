// pages/advanced/index.js
const articleList = require('../../common/data/article')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList
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
    const self = this
    console.log('aaa')
    wx.startPullDownRefresh({
      success: function() {
        self.loadArticleList()
        wx.stopPullDownRefresh()
      }
    })
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

  loadArticleList() {
    setData({
      articleList
    })
  },
  
  onItemClick (e) {
    const { target: { dataset: { url } = {} } = {} } = e
    if (url) {
      wx.setClipboardData({
        data: url
      })
    }
  }
})
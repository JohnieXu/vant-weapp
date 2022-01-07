// decrypt/pages/index/index.js
const { encrypt, decrypt } = require('decrypt-core')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'a',
    appkey: '',
    source: '',
    result: '',
    sourceAutosize: { maxHeight: 800, minHeight: 500 },
    resultAutosize: { maxHeight: 800, minHeight: 500 }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = encrypt('hello world', '123')
    console.log(res)
    console.log(decrypt(res, '123'))
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
  handleTabChange (e) {
    wx.showToast({
      title: `${e.detail.name}`,
      icon: 'none'
    })
  },
  handleAppkeyChange (e) {
    this.setData({
      appkey: e.detail
    })
  },
  handleSourceChange (e) {
    this.setData({
      source: e.detail
    })
  },
  handleStartClick () {
    if (!this.data.appkey) {
      wx.showToast({
        title: '请填写秘钥',
        icon: 'none'
      })
      return
    }
    if (!this.data.source) {
      wx.showToast({
        title: '请填写数据',
        icon: 'none'
      })
      return
    }
    if (this.data.active === 'a') {
      const result = encrypt(this.data.source, this.data.appkey)
      this.setData({
        result
      })
    } else {
      const result = decrypt(this.data.source, this.data.appkey)
      this.setData({
        result: JSON.stringify(result, null, 2)
      })
    }
  }
})
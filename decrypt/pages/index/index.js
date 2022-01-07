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
    sourceAutosize: { maxHeight: 500, minHeight: 120 },
    resultAutosize: { maxHeight: 500, minHeight: 120 }
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
    this.setData({
      result: '',
      active: e.detail.name
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
        result: typeof result !== 'string' ? JSON.stringify(result, null, 2) : result
      })
    }
  },
  handleCopyClick () {
    if (!this.data.result) {
      return
    }
    wx.setClipboardData({
      data: this.data.result,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none'
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '复制到剪贴板失败，请手动复制',
          icon: 'none'
        })
      },
      complete: function(res) {},
    })
  }
})
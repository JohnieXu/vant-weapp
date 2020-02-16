// pages/merchant/apply.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialog: {
      show: false
    }
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

  handleListItemTap1: function (e) {
    this.showDialog(1)
  },

  handleListItemTap2: function (e) {
    this.showDialog(2)
  },

  handleListItemTap3: function (e) {
    this.showDialog(3)
  },

  handleDialogClose: function () {
    this.closeDialog()
  },

  handleDialogConfirm: function () {
    // TODO: 弹框确认，跳转开户信息填写页面
    console.log('confirm')
  },

  showDialog: function (type) {
    if (!type) { return }
    this.setData({
      ...this.data,
      dialog: {
        ...this.data.dialog,
        show: true
      }
    })
  },

  closeDialog: function (type) {
    this.setData({
      ...this.data,
      dialog: {
        ...this.data.dialog,
        show: false
      }
    })
  }
})
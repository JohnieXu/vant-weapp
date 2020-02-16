// pages/dialog/advanced/index.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false
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

  showDialog: function () {
    this.setData({
      dialogShow: true
    })
  },

  closeDialog: function () {
    this.setData({
      dialogShow: false
    })
  },

  closeDialog2: function () {
    Dialog.close()
  },

  handleButtonClick1: function () {
    this.showDialog()
  },

  handleButtonClick2: function () {
    Dialog({
      selector: '#van-dialog-2',
      showConfirmButton: false,
      closeOnClickOverlay: false,
      className: 'dialog2',
      width: '260px'
    })
  },

  handleButtonClick3: function () {
    Dialog({
      selector: '#van-dialog-3',
      showCancelButton: true,
      cancelButtonTrext: '取消',
      confirmButtonText: '去设置',
      cancelButtonColor: '#C46B85',
      confirmButtonColor: '#C46B85',
      message: '为了给你推荐更合适的漫展～\n请开启定位权限～',
      confirmButtonOpenType: 'openSetting',
      width: '260px',
      className: 'dialog3'
    })
  },

  handleOpenSetting: function () {
    console.log('成功打开授权设置页面')
  }
})
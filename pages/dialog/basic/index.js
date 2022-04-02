// pages/dialog/basic/index.js
import Dialog from '@vant/weapp/dialog/dialog'

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

  handleButtonClick1: function () {
    Dialog.alert({
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行'
    })
  },

  handleButtonClick2: function () {
    Dialog.alert({
      message: '代码是写出来给人看的，附带能在机器上运行'
    })
  },

  handleButtonClick3: function () {
    Dialog.confirm({
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行',
    })
      .then(() => {
        console.log('确认')
      })
      .catch(() => {
        console.log('取消')
      })
  },

  handleButtonClick4: function () {
    Dialog.confirm({
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行',
      asyncClose: true
    })
      .then(() => {
        setTimeout(() => {
          Dialog.close()
        }, 1000)
      })
      .catch(e => {
        console.log('取消')
        Dialog.close()
      })
  }
})
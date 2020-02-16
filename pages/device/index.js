// pages/device/index.js
import Toast from '@vant/weapp/toast/toast'
import { getMyDeviceList } from '../../api/device'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device_total: 1,
    device_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDeviceData()
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
  handleAddButtonTap: function () {
    wx.navigateTo({
      url: '/pages/device/type'
    })
  },
  getDeviceData: function () {
    getMyDeviceList().then(res => {
      if (!res.success) {
        return Toast.fail(res.message || '未知异常')
      }
      this.setData({
        device_list: res.data.list || []
      })
    }).catch(e => {
      Toast.fail('网络异常')
    }).finally(() => {
      wx.stopPullDownRefresh()
    })
  },
  // 管理按钮点击
  handleManageButtonClick: function () {
    wx.navigateTo({
      url: '/pages/device/list'
    })
  }
})
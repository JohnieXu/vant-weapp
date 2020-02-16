import Toast from '@vant/weapp/toast/toast';
import { getDeviceTypeList } from '../../api/device.js';

// pages/device/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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
    this.getList()
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

  getList: function () {
    getDeviceTypeList().then(res => {
      console.log(res)
      wx.stopPullDownRefresh()
      if (!res.success) {
        return Toast.fail(res.message || '未知异常')
      }
      this.setData({
        typeList: res.data.list || []
      })
    }).catch(e => {
      console.error(e)
      Toast.fail('网络异常')
    })
  }
})
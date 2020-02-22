// pages/dialog/custom/index.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialog3: {
      current: 0,
      confirmButtonText: '继续'
    },
    popup1: {
      current: 2,
      list: [
        {
          title: '最近播放',
          list: [
            {
              id: 1,
              name: '得不到你',
              singer: '隔壁老樊'
            },
            {
              id: 2,
              name: '东西',
              singer: '纳豆'
            },
            {
              id: 3,
              name: '我的世界',
              singer: '陈姿彤'
            },
            {
              id: 4,
              name: '猜一猜（网剧《致我们暖暖的小时光》）',
              singer: '何曼婷'
            },
            {
              id: 5,
              name: '云烟成雨',
              singer: '房东的猫'
            },
            {
              id: 6,
              name: '像我这样的人',
              singer: '毛不易'
            },
            {
              id: 7,
              name: '年少有为',
              singer: '毛不易'
            },
            {
              id: 8,
              name: '红梅花儿开',
              singer: '毛不易'
            },
            {
              id: 9,
              name: '人间不值得',
              singer: '黄诗扶'
            },
            {
              id: 10,
              name: '梦一场',
              singer: '萧敬腾'
            },
            {
              id: 11,
              name: '得不到你',
              singer: '隔壁老樊'
            },
            {
              id: 12,
              name: '东西',
              singer: '纳豆'
            },
            {
              id: 13,
              name: '我的世界',
              singer: '陈姿彤'
            },
            {
              id: 14,
              name: '猜一猜（网剧《致我们暖暖的小时光》）',
              singer: '何曼婷'
            },
            {
              id: 15,
              name: '云烟成雨',
              singer: '房东的猫'
            },
            {
              id: 16,
              name: '像我这样的人',
              singer: '毛不易'
            },
            {
              id: 17,
              name: '年少有为',
              singer: '毛不易'
            },
            {
              id: 18,
              name: '红梅花儿开',
              singer: '毛不易'
            },
          ]
        },
        {
          title: '上次播放',
          list: [
            {
              id: 1,
              name: '得不到你',
              singer: '隔壁老樊'
            },
            {
              id: 2,
              name: '东西',
              singer: '纳豆'
            },
            {
              id: 3,
              name: '我的世界',
              singer: '陈姿彤'
            },
            {
              id: 4,
              name: '猜一猜（网剧《致我们暖暖的小时光》）',
              singer: '何曼婷'
            },
            {
              id: 5,
              name: '云烟成雨',
              singer: '房东的猫'
            },
            {
              id: 6,
              name: '像我这样的人',
              singer: '毛不易'
            },
            {
              id: 7,
              name: '年少有为',
              singer: '毛不易'
            },
            {
              id: 8,
              name: '红梅花儿开',
              singer: '毛不易'
            },
            {
              id: 9,
              name: '人间不值得',
              singer: '黄诗扶'
            },
            {
              id: 10,
              name: '梦一场',
              singer: '萧敬腾'
            },
            {
              id: 11,
              name: '云烟成雨',
              singer: '房东的猫'
            },
            {
              id: 12,
              name: '像我这样的人',
              singer: '毛不易'
            },
          ]
        },
        {
          title: '当前播放',
          activeId: 4,
          list: [
            {
              id: 1,
              name: '得不到你',
              singer: '隔壁老樊'
            },
            {
              id: 2,
              name: '东西',
              singer: '纳豆'
            },
            {
              id: 3,
              name: '我的世界',
              singer: '陈姿彤'
            },
            {
              id: 4,
              name: '猜一猜（网剧《致我们暖暖的小时光》）',
              singer: '何曼婷'
            },
            {
              id: 5,
              name: '云烟成雨',
              singer: '房东的猫'
            },
            {
              id: 6,
              name: '像我这样的人',
              singer: '毛不易'
            },
            {
              id: 7,
              name: '年少有为',
              singer: '毛不易'
            },
            {
              id: 8,
              name: '红梅花儿开',
              singer: '毛不易'
            },
            {
              id: 9,
              name: '人间不值得',
              singer: '黄诗扶'
            },
            {
              id: 10,
              name: '梦一场',
              singer: '萧敬腾'
            },
            {
              id: 11,
              name: '红梅花儿开',
              singer: '毛不易'
            },
            {
              id: 12,
              name: '人间不值得',
              singer: '黄诗扶'
            },
            {
              id: 13,
              name: '梦一场',
              singer: '萧敬腾'
            },
          ]
        }
      ]
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

  showDialog: function (index) {
    this.setData({
      [`showDialog${index || ''}`]: true
    })
  },

  closeDialog: function (index) {
    this.setData({
      [`showDialog${index}`]: false
    })
  },

  showPopup: function (index) {
    this.setData({
      [`showPopup${index}`]: true
    })
  },

  closePopup: function (index) {
    this.setData({
      [`showPopup${index}`]: false
    })
  },

  // b站青少年模式提示
  handleButtonClick1: function () {
    Dialog({
      selector: '#van-dialog-1',
      showCancelButton: false,
      className: 'dialog-1',
      confirmButtonColor: '#C46B85',
      confirmButtonText: '我知道了',
      width: '240px'
    })
  },

  // 高德地图图层使用提示
  handleButtonClick2: function () {
    Dialog({
      selector: '#van-dialog-2',
      showCancelButton: true,
      className: 'dialog-2',
      confirmButtonText: '同意',
      cancelButtonText: '取消',
      width: '520rpx',
      title: '路况事件图层使用提示',
      message: '高德地图路况事件图层功能为用户提供路况分享服务, 用户自行上报和分享的路况事件仅供参考, 不代表高德观点,高德对此不承担任何责任; 同时, 您需对您分享路况事件的行为负责, 为避免误导他人, 请您在分享路况事件时确保其真实、准确、及时。',
      customStyle: `
        --dialog-border-radius: 12rpx;
        --dialog-header-padding-top: 32rpx;
        --dialog-header-font-weight: 400;
        --dialog-message-padding: 28rpx;
        --dialog-message-font-size: 28rpx;
        --dialog-message-line-height: 1.4;
        --button-large-height: 80rpx;
      `
    })
  },

  // 地图功能引导弹窗
  handleButtonClick3: function () {
    this.showDialog(3)
  },

  // 地图功能引导弹窗sipwerchange
  onDialog3SwiperChange: function (e) {
    console.log(e)
    this.setData({
      dialog3: {
        ...this.data.dialog3,
        current: e.detail.current,
        confirmButtonText: e.detail.current === 0 ? '继续' : '知道了'
      }
    })
  },

  // 地图功能引导弹窗confirm
  handleDialog3Confirm: function () {
    let current = this.data.dialog3.current
    if (current === 0) {
      this.setData({
        ...this.data,
        dialog3: {
          ...this.data.dialog3,
          current: ++current
        },
        // showDialog3: true
      })
      return
    } else if (current === 1) {
      this.setData({
        showDialog3: false
      }, () => {
        setTimeout(() => {
          this.setData({
            dialog3: {
              current: 0,
              confirmButtonText: '继续'
            }
          })
        }, 300)
      })
      return
    } else {
      this.setData({
        dialog3: {
          ...this.data.dialog3,
          current: 0
        }
      })
      return
    }
  },
  handleButtonClick4: function () {
    this.showDialog(4)
  },

  handleButtonClick5: function () {
    this.showPopup(1)
  },
  handlePopupClose1: function () {
    this.closePopup(1)
  },
  handlePopupChange1: function (e) {
    if (e.detail.source !== 'touch') { return }
    this.setData({
      popup1: {
        ...this.data.popup1,
        current: e.detail.current
      }
    })
  },
  handleButtonClick6: function () {
    this.showPopup(2)
  },
  handleButtonClick7: function () {
    Dialog({
      selector: '#van-dialog-7',
      className: 'dialog-7',
      showConfirmButton: false,
      closeOnClickOverlay: true
    })
  },
})
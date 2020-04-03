import { promisify } from '../../../utils/util.js'

const request = promisify(wx.request)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        title: '推荐',
        list: []
      },
      {
        id: 1,
        title: '疫情',
        list: []
      },
      {
        id: 2,
        title: '剧集',
        list: []
      },
      {
        id: 3,
        title: '电影',
        list: []
      },
      {
        id: 4,
        title: '少儿',
        list: []
      },
      {
        id: 5,
        title: '综艺',
        list: []
      },
      {
        id: 6,
        title: '游戏',
        list: []
      },
    ],
    defaultActiveTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getMenuButtonBoundingClientRect())
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        console.log(res.statusBarHeight)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getFeeds1()
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
    console.log('pullDown')
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

  onVideoError (e) {
    console.log(e)
  },

  getFeeds1 () {
    const url = 'https://lessing.oss-cn-beijing.aliyuncs.com/files/iqiyi/feeds1.json'
    request({
      url,
      method: 'GET'
    }).then(res => {
      const { data = [] } = res
      const tabs = [].concat(this.data.tabs)
      tabs[0].list = data
      this.setData({
        tabs
      })
    }).catch(e => {
      console.error(e)
    })
  }
})
// yanxuan/pages/index/index.js
const homeData = require('../../data/home.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'a',
    tabs: [
      {
        title: '猜你喜欢',
        name: 'a'
      },
      {
        title: '居家生活',
        name: 'b'
      },
      {
        title: '美食酒水',
        name: 'c'
      },
      {
        title: '个护清洁',
        name: 'd'
      },
      {
        title: '数码家电',
        name: 'e'
      },
      {
        title: '服饰鞋包',
        name: 'f'
      },
      {
        title: '运动旅行',
        name: 'g'
      },
      {
        title: '母婴亲子',
        name: 'h'
      },
      {
        title: '全球特色',
        name: 'i'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData().then((homeData) => {
      this.setData({
        homeData
      })
    })
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
  onShareTimeline() {

  },
  getData() {
    return new Promise((resolve, reject) => {
      resolve(homeData)
    })
  }
})
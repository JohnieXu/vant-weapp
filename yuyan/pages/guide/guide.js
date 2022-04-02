Page({
  data: {
    guide: [
      {
        image: 'https://lessing.oss-cn-beijing.aliyuncs.com/files/aeb46803-b7f0-4026-93e9-455f9b3fe5d0.png',
        title: '视频面诊',
        desc: '医生一对一，开启你的变美之旅'
      },
      {
        image: 'https://lessing.oss-cn-beijing.aliyuncs.com/files/453ab123-12ab-43f2-abdb-89bdee8a3a0f.png',
        title: '专业诊断',
        desc: '专业医师诊断，确保你诊断万无一失'
      },
      {
        image: 'https://lessing.oss-cn-beijing.aliyuncs.com/files/7952ce0f-6fdb-43e4-8243-0656d71cfc7e.png',
        title: '用心服务',
        desc: '用心服务与你，确保你变美安全无忧'
      }
    ]
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
  onButtonTap() {
    wx.redirectTo({
      url: '/pages/yuyan/login/login',
    })
  }
})

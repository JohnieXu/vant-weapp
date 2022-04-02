import Toast from '@vant/weapp/toast/toast';
import { login } from '../../api/user';

//获取应用实例
const app = getApp()

Page({
  data: {
    username: 'JohnieXu',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    modules: [
      {
        title: '进阶',
        link: '/pages/advanced/index',
      },
      {
        title: '精选',
        link: '/pages/chosen/index/index',
      },
      {
        title: 'demo',
        link: '/pages/dialog/index/index',
      },
      {
        title: '全部',
        link: '/pages/advanced/index',
      },
      {
        title: '推荐',
        link: '/pages/advanced/index',
      },
      {
        title: '关于',
        link: '/pages/advanced/index',
      },
    ],
    subscription: {
      qrcode: 'https://tva1.sinaimg.cn/large/00831rSTgy1gclpr3746wj304s04sglu.jpg',
      slogan: '个人前端开发实战经验分享，一同学习提示'
    },
    wechatIcon: 'https://tva1.sinaimg.cn/large/00831rSTly1gclqf08h4aj301100udfl.jpg',
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
  // 模块点击
  handleModuleTap: (e) => {
    const title = e.target.dataset.title
    const url = e.target.dataset.url
    if (!title) {
      return
    }
    if (!title || !url) {
      Toast('小哥哥正在全力开发中^_^')
      return
    }
    
    wx.navigateTo({
      url
    })
  },
  // 头部更新点击
  bindMoreTap: function() {
    // wx.navigateTo({
    //   url: '/pages/mine/mine',
    // })
  },
  onLoad: function () {},
})

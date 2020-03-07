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
        link: '',
      },
      {
        title: '精选',
        link: '',
      },
      {
        title: 'demo',
        link: '',
      },
      {
        title: '全部',
        link: '',
      },
      {
        title: '推荐',
        link: '',
      },
      {
        title: '关于',
        link: '',
      },
    ],
    subscription: {
      qrcode: 'https://tva1.sinaimg.cn/large/00831rSTgy1gclpr3746wj304s04sglu.jpg',
      slogan: '个人前端开发实战经验分享，一同学习提示'
    },
    wechatIcon: 'https://tva1.sinaimg.cn/large/00831rSTly1gclqf08h4aj301100udfl.jpg',
  },
  // 模块点击
  handleModuleTap: (e) => {
    const title = e.target.dataset.title
    if (!title) {
      return
    }
    switch (title) {
      case 'demo':
        wx.navigateTo({
          url: '/pages/dialog/index/index',
        })
        break
      default:
        Toast('小哥哥正在全力开发中^_^')
        break
    }
  },
  // 头部更新点击
  bindMoreTap: function() {
    // wx.navigateTo({
    //   url: '/pages/mine/mine',
    // })
  },
  onLoad: function () {},
})

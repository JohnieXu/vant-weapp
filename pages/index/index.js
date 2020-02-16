import Toast from '@vant/weapp/toast/toast';
import { login } from '../../api/user';

//获取应用实例
const app = getApp()

Page({
  data: {
    username: 'JohnieXu',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap: async function() {
    Toast('我是提示文案，建议不超过十五字~')
    let res = {}
    try {
      res = await login('admin', '123123')
    } catch (e) {
      console.error(e)
    }
    console.log(res)
  },
  // 头部更新点击
  bindMoreTap: function() {
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },
  onLoad: function () {},
})

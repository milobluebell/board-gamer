// index.js
// 获取应用实例
import { vars } from './../../utils/index.js';

Page({
  data: {
    paddingTop: getApp().globalData.navigatorBarHeight + getApp().globalData.statusBarHeight,
    windowHeight: getApp().globalData.windowHeight,
    windowWidth: getApp().globalData.windowWidth,
    goodMen: [],
    badMen: [],
    thirdParty: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  test() {
    wx.showToast({
      title: '成功',
      icon: 'success',
    })
  },
  onLoad() {
    const { roles } = vars;
    this.setData({
      goodMen: Object.values(roles.goodMen),
      badMen: Object.values(roles.badMen),
      thirdParty: Object.values(roles.indifferentMen)
    })
  },
})

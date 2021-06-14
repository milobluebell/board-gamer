// index.js
// 获取应用实例
import utils from './../../utils/index.js';

Page({
  data: {
    paddingTop: getApp().globalData.navigatorBarHeight + getApp().globalData.statusBarHeight,
    windowHeight: getApp().globalData.windowHeight,
    windowWidth: getApp().globalData.windowWidth,
    goodMen: [],
    badMen: [],
    thirdParty: []
  },
  onLoad() {
    const { vars } = utils;
    this.setData({
      goodMen: Object.values(vars.roles.goodMen),
      badMen: Object.values(vars.roles.badMen),
      thirdParty: Object.values(vars.roles.indifferentMen)
    })
  },
  // 开始一场游戏
  startGame() {
    const { models } = utils;
    // 启动游戏
    const game = new models.Game([1, 2, 3, 4, 14, 14, 14, 14], {});
    wx.navigateTo({
      url: '../teleprompter/index'
    })
  },
})

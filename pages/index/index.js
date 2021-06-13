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
    // 启动游戏
    const game = new models.Game([], {});
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})

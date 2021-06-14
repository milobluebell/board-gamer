// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    paddingTop: getApp().globalData.navigatorBarHeight + getApp().globalData.statusBarHeight,
    windowHeight: getApp().globalData.windowHeight,
    windowWidth: getApp().globalData.windowWidth,
  },
  onLoad() {

  }
})

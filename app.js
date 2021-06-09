// app.js
App({
  globalData: {},

  //
  constants: {
    errorToastDuration: 2000,
    successToastDuration: 1000
  },

  onLaunch() {

    // 初始化赋值
    const systemInfo = wx.getSystemInfoSync();
    const { model, statusBarHeight, windowWidth, windowHeight } = systemInfo;
    const pxPerRpx = windowWidth / 750;
    const isIphone = model.toLowerCase().includes('iphone');
    const isIphoneX = model.toLowerCase().includes('iphone x');
    const navigatorBarHeight = isIphone ? 44 : 48;

    this.globalData = {
      systemInfo: wx.getSystemInfoSync(),
      model: model,
      statusBarHeight: statusBarHeight,
      windowWidth: windowWidth,
      windowHeight: windowHeight,
      isIphone: isIphone,
      isIphoneX: isIphoneX,
      navigatorBarHeight: navigatorBarHeight,
      pxPerRpx: windowWidth / 750,
      menuBarHeight: isIphoneX ? pxPerRpx * 160 : pxPerRpx * 110,
      topBarHeight: navigatorBarHeight + statusBarHeight,
      headerNavBtnGroup: [],

      // 当前正在发送的请求列表
      httpRequestingArray: [],

      // 是否低网速，逻辑是：发送请求时如果超过一定时长，就累加此值如果超过4次，则弹出网速不稳定的提醒
      requestTimer: Date.parse(new Date()) / 1000,
      slowNetworkDetected: 0,

      // 用户信息
      userinfo: {},

      // 是否已经登陆
      isLogin: false,
    }

  }
})

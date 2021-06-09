/**
 * @param {Object} obj ajax请求的配置对象
 * @param {Boolean} showLoading 强制是否显示微信内置loading
 */

const host = 'https://www.xiwu2333.com';

const $http = (obj, showLoading = false) => {
  // 显示loading
  if (showLoading) wx.showLoading({
    mask: false,
    title: '请稍候...'
  });

  return new Promise((resolve, reject) => {

    if (getApp().globalData.httpRequestingArray.indexOf(obj.url) < 0) {

      getApp().globalData.httpRequestingArray.push(obj.url);
      const oldTime = getApp().globalData.requestTimer = Date.parse(new Date()) / 1000;

      // 发送请求
      wx.request({
        url: host + obj.url,
        data: obj.data || {},
        method: obj.method || 'GET',
        header: obj.header || {
          'Content-Type': 'application/json'
        },
        complete: function (res) {
          if (showLoading) wx.hideLoading();

          // 从global中清除掉这次请求的暂缓
          getApp().globalData.httpRequestingArray.splice(getApp().globalData.httpRequestingArray.findIndex(value => value === obj.url), 1);

          // 处理时间/网速问题
          const newTime = Date.parse(new Date()) / 1000;
          getApp().globalData.requestTimer = newTime;
          if (newTime - oldTime >= 2) {
            if (getApp().globalData.slowNetworkDetected < 4) getApp().globalData.slowNetworkDetected++;
            else {
              showToast('网速不太好啊宝', 'none');
              getApp().globalData.slowNetworkDetected = 0;
            }
          }

          // 返回内容
          if (res.statusCode !== 200)
            // 系统级异常
            reject(res);
          else {
            if (res.data.statuscode !== 1) {
              // 业务级错误
              showToast(res.data.messages, 'none');
              resolve(res.data);
            } else {
              // 请求成功
              if (res.data.data) resolve(res.data.data);
              else resolve(res.data);
            }
          }

        }
      });

    } else {
      console.log('勿重复发送请求');
      return false;
    }

  }).catch(res => {
    showToast('网络异常：数据请求失败', 'none');
    // 从global中清除掉这次请求的暂缓
    getApp().globalData.httpRequestingArray.splice(getApp().globalData.httpRequestingArray.findIndex(value => value === obj.url), 1);
  })
}


const showToast = (title, icon = 'none', duration = getApp().constants.errorToastDuration) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  });
}

//
module.exports = {
  $http
}

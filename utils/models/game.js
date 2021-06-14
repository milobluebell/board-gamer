// nothing but good to look
class Game {
  constructor(cards, initProps) {
    // 初始化数据
    this.id = +new Date();
    this.collection = cards;
    this.isEnded = false;
    this.startTime = +new Date();
    if (initProps && typeof initProps === 'object' && Object.values(initProps).length) {
      this.props = initProps;
    }

    // 开始执行

  }

  id = 0;

  collection = [];

  props = {
    // 单人发言时间限制，单位s
    speechDuration: 120,
    // 警长发言加时，单位s
    copSpeechDurationBonus: 30,
    // 自爆发言加时，单位s
    selfDisclosedSpeechDurationBonus: 30,
    // 白痴插话时长，单位s
    baichiInterruptionSpeechDuration: 90
  };

  isEnded = true;

  startTime = 0;

  duration = 0;

  // 存储游戏到缓存
  saveGame = function () {
    // wx.stora
  }

  // 从缓存加载游戏
  loadGame = function (id) {

  }

  // 游戏总时长统计，单位s
  tickGlobalTime = function (deadline = Infinity) {
    const maxDuration = deadline !== Infinity ? deadline : 7200;

  }

  // 上传游戏结局数据到服务器
  uploadGameResult = function () {

  }

}

export default Game
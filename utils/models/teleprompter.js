// nothing but good to look

class Teleprompter {

  // 根据牌来生成提词器，实际上是一个链表。
  // 每个夜间行动回合都要重新生成一个head。
  constructor(collections, prevTeleprompter = null) {
    this.collection = collections;
    this.prevNode = prevTeleprompter;
    this.roleAdapters = this.prevNode ? this.prevNode.roleAdapters : {
      langren: [],
      langwang: [],
      yuyanjia: [],
      nvwu: [],
      lieren: [],
      shouwei: [],
    };
  }

  collection = [];

  prompters = [];

  prevNode = null;

  // 演职员表
  roleAdapters = {};

  // 执行数据
  statics = {
    // 吃刀玩家
    woundedPlayerNumberInThisTurn: [],
    // 解救玩家,
    savedPlayerNumberInThisTurn: [],
    // 毒杀玩家
    poisonedPlayerNumberInThisTurn: [],
    // 猎人
    poisonedPlayerNumberInThisTurn: [],
    // 查验玩家
    inspectedPlayerNumberInThisTurn: [],
    // 守护玩家
    guardedPlayerNumberInThisTurn: [],
    // 死亡玩家
    killedPlayerNumberInThisTurn: [],
  }

  generatePrompters = function () {
    const collection = this.collection;

    // 序
    const prefaces = [
      new PrompterCard('发牌'),
      new PrompterCard('天黑请闭眼')
    ]

    // 夜间行动指引
    const actionInNight = [
      new PrompterCard('行动', [
        new Task('狼人睁眼', {
          needInputNumber: true,
          callback: function (...n) {
            this.roleAdapters.langren.push(...n);
          }
        }),
        new Task('击杀目标', {
          needInputNumber: true,
          callback: function (n) {
            this.statics.woundedPlayerNumberInThisTurn.push(n);
          }
        }),
        new Task('请确认狼王', {
          needInputNumber: true,
          callback: function (n) {
            this.statics.langwang.push(n);
          }
        }),
        new Task('预言家睁眼', {
          needInputNumber: true,
          callback: function (...n) {
            this.roleAdapters.yuyanjia.push(...n);
          }
        }),
        new Task('查验一名玩家', {
          needInputNumber: true,
          callback: function (n) {
            this.statics.inspectedPlayerNumberInThisTurn.push(n);
          }
        }),
        new Task('女巫请睁眼', {
          needInputNumber: true,
          callback: function (n) {
            this.roleAdapters.nvwu.push(n);
          }
        }),
        new Task(`解救${this.statics.woundedPlayerNumberInThisTurn[0]}号玩家`, {
          needConfirm: true,
          needInputNumber: false,
          callback: function (n) {
            this.statics.savedPlayerNumberInThisTurn.push(n);
          }
        }),
        new Task('毒杀一名玩家', {
          needInputNumber: true,
          validator: function () { return !this.statics.savedPlayerNumberInThisTurn },
          callback: function (n) {
            this.statics.savedPlayerNumberInThisTurn.push(n);
          }
        }),
        new Task('守卫请睁眼', {
          needInputNumber: false
        }),
        new Task('守护一名玩家', {
          needInputNumber: true,
          callback: function (n) {
            this.statics.guardedPlayerNumberInThisTurn.push(n);
          }
        }),
        new Task('确定猎人编号', {
          needInputNumber: true,
          callback: function (n) {
            this.roleAdapters.lieren.push(n);
          }
        }),
      ])
    ];

    // 天亮了
    const postfaces = [
      new PrompterCard('天亮了'),
      new PrompterCard(`昨夜死亡的是${this.statics.killedPlayerNumberInThisTurn.join('、')}号玩家`),
    ];

    // 第二天白天

    // 最正常的顺序
    const result = [
      ...prefaces,
      ...actionInNight,
      ...postfaces
    ];

    this.prompters = result;
    return result;
  }

}

// 卡片
class PrompterCard {
  constructor(text, initTasks = []) {
    this.text = text;
    this.microTasks = initTasks;
  }

  text = '';

  microTasks = [];

  addTasks = function (tasks) {
    this.microTasks.push(tasks);
  }

  getTasks = function () {
    return this.microTasks;
  }

}

// 当前卡片上的任务
class Task {
  constructor(text, props = {
    needConfirm: false,
    // 是否需要输入一个数字才能触发下一任务
    needInputNumber: false,
    // 是否允许触发
    validator: () => true,
    // 回调函数
    callback: () => { }
  }) {
    this.text = text;
    this.options = props;
  }

  text = '';

  options = {};
}

export default Teleprompter;
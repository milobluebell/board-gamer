// components/curtain.js
import utils from './../../utils/index.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    chapter: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function () {
    const { models } = utils;
    // 启动剧本
    const drama = new models.Drama();
    this.setData({
      chapter: drama.readCurrentChapter()
    });

    // 启动提词器
    const prompter = new models.Teleprompter();
    prompter.generatePrompters();
    const prompterCards = prompter.prompters;
    console.log(prompter, prompterCards, 123);
  }
})

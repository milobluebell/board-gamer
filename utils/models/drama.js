// nothing but good to look

export const dramas = {
  noOneGuilty: [{
    stageName: '发牌',
    dialogue: '没有一片雪花 觉得自己有责任',
    background: ''
  }, {
    stageName: '发牌',
    dialogue: '我去过"地狱" 但那儿没人',
    background: ''
  }, {
    dialogue: '沉默 也是一种罪行',
    background: ''
  }, {
    dialogue: '欢迎来到狗镇',
    background: ''
  }],
  schizomaniaMan: [{
    dialogue: '一会儿叫我小丑',
    background: ''
  }]
}

class Drama {

  constructor(specifiedDrama = 'noOneGuilty') {
    this.stagingDrama = dramas[specifiedDrama]
    getApp().drama = this;
  }

  stagingDrama = [];

  currentChapterNumber = 0;

  next = function () {
    if (this.currentChapterNumber >= this.stagingDrama.length) {
      return this.skipTo(0);
    } else {
      return this.skipTo(this.currentChapterNumber + 1);
    }
  }

  prev = function () {
    if (this.currentChapterNumber <= 0) {
      return this.skipTo(0);
    } else {
      return this.skipTo(this.stagingDrama.length - 1);
    }
  }

  skipTo = function (chapterNumber) {
    this.currentChapterNumber = chapterNumber;
    return stagingDrama[this.currentChapterNumber];
  }

  readChapter = function (chapterNumber) {
    return this.stagingDrama[chapterNumber];
  }

  readCurrentChapter = function () {
    return this.readChapter(this.currentChapterNumber);
  }

}

export default Drama;
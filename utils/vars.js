// nothing but good to look
// constants.js 常量

//
var tribeAlias = new Map();
tribeAlias.set('good', '00100');
tribeAlias.set('bad', '00010');
tribeAlias.set('3rdp', '00001');
tribeAlias.set('items', '00000');

//
function Role(tribe,) {
  this.tribe = tribe;
  // this.
}

// 好人阵营
const goodMen = {
  'nvwu': {
    cn_name: '女巫',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/nw.png',
    title_url: ''
  },
  'baichi': {
    cn_name: '白痴',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/bc.png',
    title_url: ''
  },
  'lieren': {
    cn_name: '猎人',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lr.png',
    title_url: ''
  },
  'moshushi': {
    cn_name: '魔术师',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/mss.png',
    title_url: ''
  },
  'pingmin': {
    cn_name: '平民',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/pm.png',
    title_url: ''
  },
  'qishi': {
    cn_name: '骑士',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/qs.png',
    title_url: ''
  },
  'shemengzhe': {
    cn_name: '摄梦人',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/smr.png',
    title_url: ''
  },
  'shouwei': {
    cn_name: '守卫',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/sw.png',
    title_url: ''
  },
  'yuyanjia': {
    cn_name: '预言家',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yyj.png',
    title_url: ''
  },
}

// 坏人阵营
const badMen = {
  'bailangwang': {
    cn_name: '白狼王',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/blw.png',
    title_url: ''
  },
  'langmeiren': {
    cn_name: '狼美人',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lmr.png',
    title_url: ''
  },
  'langwang': {
    cn_name: '狼王',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lw.png',
    title_url: ''
  },
  'yinlang': {
    cn_name: '隐狼',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yl.png',
    title_url: ''
  },
}

// 第三方
const indifferentMen = {
  'anlianzhe': {
    cn_name: '暗恋者',
    tribe: tribeAlias.get('3rdp'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/alz.png',
    title_url: ''
  },
}

const cop = {
  cn_name: '警徽',
  tribe: tribeAlias.get('items'),
  image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/jz.png',
  title_url: ''
}

module.exports = {
  roles: {
    goodMen,
    badMen,
    indifferentMen
  },
  cop
};
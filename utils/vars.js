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
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/nw.png'
  },
  'baichi': {
    cn_name: '白痴',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/bc.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/bc.png'
  },
  'lieren': {
    cn_name: '猎人',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lr.png'
  },
  'moshushi': {
    cn_name: '魔术师',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/mss.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/mss.png'
  },
  'pingmin': {
    cn_name: '平民',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/pm.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/pm.png'
  },
  'qishi': {
    cn_name: '骑士',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/qs.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/qs.png'
  },
  'shemengzhe': {
    cn_name: '摄梦人',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/smr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/smr.png'
  },
  'shouwei': {
    cn_name: '守卫',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/sw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/sw.png'
  },
  'yuyanjia': {
    cn_name: '预言家',
    tribe: tribeAlias.get('good'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yyj.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/yyj.png'
  },
}

// 坏人阵营
const badMen = {
  'bailangwang': {
    cn_name: '白狼王',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/blw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/blw.png'
  },
  'langmeiren': {
    cn_name: '狼美人',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lmr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lmr.png'
  },
  'langwang': {
    cn_name: '狼王',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lw.png'
  },
  'yinlang': {
    cn_name: '隐狼',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yl.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/yl.png'
  },
  'langren': {
    cn_name: '狼人',
    tribe: tribeAlias.get('bad'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/langr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/langr.png'
  },
}

// 第三方
const indifferentMen = {
  'anlianzhe': {
    cn_name: '暗恋者',
    tribe: tribeAlias.get('3rdp'),
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/alz.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/alz.png'
  },
}

const cop = {
  cn_name: '警徽',
  tribe: tribeAlias.get('items'),
  image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/jz.png',
  label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/jz.png'
}

module.exports = {
  roles: {
    goodMen,
    badMen,
    indifferentMen
  },
  cop
};
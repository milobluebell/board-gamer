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
    code: 1,
    cn_name: '女巫',
    tribe: tribeAlias.get('good'),
    short_name: '女',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/nw.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/nw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/nw.png'
  },
  'baichi': {
    code: 2,
    cn_name: '白痴',
    tribe: tribeAlias.get('good'),
    short_name: '白',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/bc.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/bc.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/bc.png'
  },
  'lieren': {
    code: 3,
    cn_name: '猎人',
    tribe: tribeAlias.get('good'),
    short_name: '猎',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/lr.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lr.png'
  },
  'moshushi': {
    code: 4,
    cn_name: '魔术师',
    tribe: tribeAlias.get('good'),
    short_name: '术',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/mss.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/mss.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/mss.png'
  },
  'pingmin': {
    code: 5,
    cn_name: '平民',
    tribe: tribeAlias.get('good'),
    short_name: '民',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/pm.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/pm.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/pm.png'
  },
  'qishi': {
    code: 6,
    cn_name: '骑士',
    tribe: tribeAlias.get('good'),
    short_name: '骑',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/qs.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/qs.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/qs.png'
  },
  'shemengzhe': {
    code: 7,
    cn_name: '摄梦人',
    tribe: tribeAlias.get('good'),
    short_name: '梦',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/smr.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/smr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/smr.png'
  },
  'shouwei': {
    code: 8,
    cn_name: '守卫',
    tribe: tribeAlias.get('good'),
    short_name: '守',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/sw.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/sw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/sw.png'
  },
  'yuyanjia': {
    code: 9,
    cn_name: '预言家',
    tribe: tribeAlias.get('good'),
    short_name: '预',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/yyj.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yyj.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/yyj.png'
  },
}

// 坏人阵营
const badMen = {
  'bailangwang': {
    code: 10,
    cn_name: '白狼王',
    cn_name: '白狼王',
    tribe: tribeAlias.get('bad'),
    short_name: '白狼王',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/blw.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/blw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/blw.png'
  },
  'langmeiren': {
    code: 11,
    cn_name: '狼美人',
    tribe: tribeAlias.get('bad'),
    short_name: '狼美',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/lmr.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lmr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lmr.png'
  },
  'langwang': {
    code: 12,
    cn_name: '狼王',
    tribe: tribeAlias.get('bad'),
    short_name: '狼王',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/lw.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/lw.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/lw.png'
  },
  'yinlang': {
    code: 13,
    cn_name: '隐狼',
    tribe: tribeAlias.get('bad'),
    short_name: '隐',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/yl.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/yl.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/yl.png'
  },
  'langren': {
    code: 14,
    cn_name: '狼人',
    tribe: tribeAlias.get('bad'),
    short_name: '狼',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/langr.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/langr.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/langr.png'
  },
}

// 第三方
const indifferentMen = {
  'anlianzhe': {
    code: 14,
    cn_name: '暗恋者',
    tribe: tribeAlias.get('3rdp'),
    short_name: '恋',
    short_name_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/short-name/alz.png',
    image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/alz.png',
    label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/alz.png'
  },
}

const cop = {
  code: 0,
  cn_name: '警徽',
  tribe: tribeAlias.get('items'),
  image_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/jz.png',
  label_url: 'https://public-bucket-1252070958.cos.ap-guangzhou.myqcloud.com/board-gamer/label/text/jz.png'
}

export default {
  roles: {
    goodMen,
    badMen,
    indifferentMen
  },
  cop
};

// nothing but good to look
// constants.js 常量

//
var tribeAlias = new Map();
tribeAlias.set('good', '00100');
tribeAlias.set('bad', '00010');
tribeAlias.set('3rdp', '00001');

//
function Role (tribe, ) {
  this.tribe = tribe;
  // this.
}

// 好人阵营
const goodMen = {
  'nvwu': {
    tribe: tribeAlias.get('good')
  },
  'shouwei': {

  },
  'yuyanjia': {

  },
  'pingmin': {

  }
}

// 坏人阵营
const badMen = {
  'nvwu': {
    tribe: tribeAlias.get('good')
  },
  'shouwei': {

  },
  'yuyanjia': {

  },
  'pingmin': {

  }
}

// 第三方
const indifferentMen = {}

exports.default = {
  ...goodMen,
  ...badMen,
  ...indifferentMen
};
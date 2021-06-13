// nothing but good to look
// index.js 工具函数
import { $http } from './$http';
import vars from './vars';
import * as models from './models/index.js';

// 牌数是否符合预期
function checkCardCountValid($num) {
  return $num >= 8
}

// 校验卡片集合是否符合有效性
function checkCollectionValid($cards) {
  //

}

// 计算卡片对应武力值
function calcForce(card) {

}

// 
function dialogueGenerator() {
  var shouldAskSkills = false;
  // var 
}

//
function calcResult($goodMen, $badMen, $opt = {}) {
  // 校验goodMen和badMen是否符合对应实例

}

//
function checkTribeLabelAlias(code) {

}

export default {
  checkCardCountValid,
  checkCollectionValid,
  calcForce,
  dialogueGenerator,
  calcResult,
  $http,
  vars,
  models
}
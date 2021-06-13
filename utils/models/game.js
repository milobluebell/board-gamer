// nothing but good to look
class Game {
  constructor(cards, initProps = {}) {
    this.collection = cards;
    this.isEnded = false;
    this.startTime = +new Date();
    this.props = initProps;
  }

  collection = [];

  props = {};

  isEnded = true;

  startTime = 0;

}

export default Game
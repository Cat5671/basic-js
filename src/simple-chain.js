const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position - 1 < 0) {
      this.chain = []
      throw Error
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finalChain = this.chain.map(element => `( ${element} )`).join('~~')
    this.chain = []
    return finalChain
  }
};

module.exports = {
  chainMaker,
};

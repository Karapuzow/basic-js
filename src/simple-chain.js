const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value) {
		if (value !== undefined) {
			this.values.push(value);
    }
    else {
      this.values.push("")
    }
	  return this;
  },
  removeLink(position) {
    if (!(typeof position === 'number') || position < 1 || position > this.values.length - 1) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    const result = this.values.map((el) => `( ${el} )`).join('~~');
    this.values = [];
    return result;
  }
};

module.exports = {
  chainMaker
};

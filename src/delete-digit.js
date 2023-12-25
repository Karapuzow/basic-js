const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 

 function deleteDigit(n) {
  let maxResult = 0
  let arrDigit = n.toString().split('').map(el => +el)

  for(let i = 0; i < arrDigit.length; i++) {
    let arr = [].concat(arrDigit)
    arr.splice(i, 1)
    console.log (+arr.join(''))
    if(+arr.join('') > maxResult) {
      maxResult = +arr.join('')
    }
  }
  return maxResult
}

module.exports = {
  deleteDigit
};

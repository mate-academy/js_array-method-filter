'use strict';

/**
 * Implement method Filter
 */
// function length(item) {
//   return item.length >= 6;
// }
// let newArr = [];
// let words = ['roma', 'natalya', 'polya'];

function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  };
}

module.exports = applyCustomFilter;

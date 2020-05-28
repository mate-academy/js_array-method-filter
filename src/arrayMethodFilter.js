'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const filtredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtredArray.push(this[i]);
      }
    }

    return filtredArray;
  };
}

module.exports = applyCustomFilter;

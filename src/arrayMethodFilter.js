'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr.push(this[i]);
      }
    }

    return arr;
  };
}

module.exports = applyCustomFilter;

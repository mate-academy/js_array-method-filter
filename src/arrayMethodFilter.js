'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultArray.push(this[i]);
      }
    }

    return resultArray;
  };
}

module.exports = applyCustomFilter;

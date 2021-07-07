'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const returnArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        returnArray.push(this[i]);
      }
    }

    return returnArray;
  };
}

module.exports = applyCustomFilter;

'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resultFilterArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultFilterArray.push(this[i]);
      }
    }

    return resultFilterArray;
  };
}

module.exports = applyCustomFilter;

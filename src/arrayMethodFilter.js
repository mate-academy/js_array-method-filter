'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arrResult = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arrResult[arrResult.length] = this[i];
      }
    }

    return arrResult;
  };
}

module.exports = applyCustomFilter;

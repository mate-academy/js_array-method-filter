'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;

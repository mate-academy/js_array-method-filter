'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const result = [];
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (callback(this[i], i, this) === true) {
        result[result.length] = this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomFilter;

'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];
    let index = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result[index] = this[i];
        index++;
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;

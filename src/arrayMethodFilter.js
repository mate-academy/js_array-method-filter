'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        results[results.length] = this[i];
      }
    }
    return results;
  };
}

module.exports = applyCustomFilter;

'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered.push(this[i]);
      }
    }
    return filtered;
  };
}

module.exports = applyCustomFilter;

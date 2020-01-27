'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    if (!this.length) {
      return [];
    }

    const filtered = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered[filtered.length] = this[i];
      }
    }

    return filtered;
  };
}

module.exports = applyCustomFilter;

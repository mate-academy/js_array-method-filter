'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filtered = [];
    if (this.length === 0) {
      return this;
    }
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered[filtered.length] = this[i];
      }
    }
    return filtered;
  };
}

module.exports = applyCustomFilter;

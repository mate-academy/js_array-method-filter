'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    if (this.length === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result[result.length] = this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;

'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filter = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filter.push(this[i]);
      }
    }

    return filter;
  };
}

module.exports = applyCustomFilter;
